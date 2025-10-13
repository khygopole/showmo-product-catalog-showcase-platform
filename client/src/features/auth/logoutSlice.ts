import { apiSlice } from "../../app/api/apiSlice";
import { logout } from "./authSlice";

export const logoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(apiSlice.util.resetApiState());
          dispatch(logout());
        } catch (error) {
          console.error("Logout failed: ", error);
        }
      },
    }),
  }),
});

export const { useLogoutMutation } = logoutApiSlice;
