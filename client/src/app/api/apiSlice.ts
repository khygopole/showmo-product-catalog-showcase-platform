import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { logOut } from '../../features/auth/authSlice';
// import type { RootState, AppDispatch } from "../store";
// // Define the custom BaseQueryFn type signature for RTK Query
// type CustomBaseQuery = BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// >;

// // 1. Standard Base Query Setup
// const baseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:3000",
//   credentials: "include",
//   // 💡 Properly type getState for token retrieval
//   prepareHeaders: (headers, { getState }) => {
//     const token = (getState() as RootState).auth.token;

//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// // 2. Base Query Wrapper for Logout on Expired Token
// const baseQueryWithLogout: CustomBaseQuery = async (
//   args,
//   api,
//   extraOptions
// ) => {
//   // Cast dispatch to the AppDispatch type for correct thunk/action typing
//   const dispatch = api.dispatch as AppDispatch;

//   // Execute the standard query
//   let result = await baseQuery(args, api, extraOptions);

//   // Check for an error status that indicates token expiration/unauthorized access
//   if (
//     result?.error &&
//     ((result.error as FetchBaseQueryError).status === 401 ||
//       (result.error as FetchBaseQueryError).status === 403)
//   ) {
//     console.log("Token expired or unauthorized access. Logging out user.");

//     // Dispatch the logOut action, clearing the session
//     // dispatch(logOut());
//   }

//   return result;
// };

// 3. Create the API Slice
export const apiSlice = createApi({
  reducerPath: "api", // Recommended to define this explicitly
  //   baseQuery: baseQueryWithLogout,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include",
  }),
  tagTypes: ["User", "Product", "Account", "Other"], // types for caching
  endpoints: (builder) => ({}),
});
