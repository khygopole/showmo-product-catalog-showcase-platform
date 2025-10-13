import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TauthState, TauthUserType } from "./schema";
import type { RootState } from "../../app/store";
import { apiSlice } from "../../app/api/apiSlice";

const initialState: TauthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TauthUserType>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: "/auth/reloadCredentials",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (error) {
          console.error("Token invalid or expired: ", error);
        }
      },
    }),
  }),
});

export const selectAuthStatus = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectRole = (state: RootState) => state.auth.user?.role;

export const { setCredentials, logout } = authSlice.actions;

export const { useGetCurrentUserQuery } = authApiSlice;

export default authSlice.reducer;
