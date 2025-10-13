import { apiSlice } from "../../app/api/apiSlice";

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        const { confirmPassword, ...sanitizedData } = data;

        return {
          url: "/auth/registerUser",
          method: "POST",
          body: sanitizedData,
        };
      },
    }),
  }),
});

export const { useRegisterUserMutation } = registerApiSlice;
