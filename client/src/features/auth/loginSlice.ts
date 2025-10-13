import { apiSlice } from "../../app/api/apiSlice";
import type { TloginDataType, TloginResponseType } from "./schema";

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TloginResponseType, TloginDataType>({
      query: (data) => {
        const { isAdmin, ...rest } = data;
        return {
          url: "/auth/login",
          method: "POST",
          body: { ...rest, role: isAdmin ? "admin" : "user" },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
