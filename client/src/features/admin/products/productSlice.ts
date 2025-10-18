import { apiSlice } from "../../../app/api/apiSlice";
import type { Tproduct } from "./schema";
import { setAllProducts, addProduct } from "../../user/products/productSlice";
// import { setAllProducts, addProduct, updateProduct, removeProduct } from "../../user/products/productSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Tproduct[], void>({
      query: () => ({
        url: "/product/getProducts",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Product"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAllProducts(data));
        } catch (error) {
          console.error("Fetching products failed", error);
        }
      },
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
      invalidatesTags: ["Product"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addProduct(data));
        } catch (error) {
          console.error("Adding product failed", error);
        }
      },
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
