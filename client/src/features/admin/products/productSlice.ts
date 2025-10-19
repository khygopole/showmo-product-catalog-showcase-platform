import { apiSlice } from "../../../app/api/apiSlice";
import type { TnormalizedProduct, Tproduct } from "./schema";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const productsAdapter = createEntityAdapter<Tproduct>({
  sortComparer: (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
});

export const initialProductState = productsAdapter.getInitialState({
  selectedProductId: null as string | null,
});

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<TnormalizedProduct, void>({
      query: () => ({
        url: "/product/getProducts",
        method: "GET",
        credentials: "include",
      }),
      transformResponse: (response: Tproduct[]) => {
        return productsAdapter.setAll(initialProductState, response);
      },
      providesTags: (result) =>
        result
          ? [
              ...result.ids.map((id) => ({ type: "Product" as const, id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    // getProductById: builder.query<Tproduct, string>({
    //   query: (id) => `/product/${id}`,
    //   providesTags: (result, error, id) => [{type: "Product", id}],
    // }),
    addProduct: builder.mutation<Tproduct, FormData>({
      query: (formData) => {
        const modifiedForm = new FormData();

        formData.forEach((value, key) => {
          modifiedForm.append(key, value);
        });
        modifiedForm.append("favorites", "0");

        return {
          url: "/product/addProduct",
          method: "POST",
          body: modifiedForm,
          credentials: "include",
        };
      },
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    // updateProduct: builder.mutation<Tproduct, {id: string; formData: FormData}> ({
    //   query: ({id, formData}) => ({
    //     url: `/product/${id}`,
    //     method: "PUT",
    //     body: formData,
    //   }),
    //   invalidatesTags: (result, error, {id}) => [
    //     {type: "Product", id}, "Product"
    //   ],
    //   async onQueryStarted({id}, {dispatch, queryFulfilled}) {
    //     try {
    //       const {data} = await queryFulfilled;
    //       dispatch(updateProduct({id, changes: data}));
    //     } catch (error) {
    //       console.error("Updating product failed", error);
    //     }
    //   }
    // }),
    // deleteProduct: builder.mutation<{success: boolean; id: string}, string>({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: "DELETE"
    //   }),
    //   invalidatesTags: ["Product"],
    //   async onQueryStarted(id, {dispatch, queryFulfilled}) {
    //     try {
    //       await queryFulfilled;
    //       dispatch(removeProduct(id));
    //     } catch (error) {
    //       console.error("Failed to delete product", error);
    //     }
    //   }
    // })
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productApiSlice;

// export const {
//   useGetProductsQuery,
//   useGetProductByIdQuery,
//   useAddProductMutation,
//   useUpdateProductMutation,
//   useDeleteProductMutation,
// } = productApiSlice;
