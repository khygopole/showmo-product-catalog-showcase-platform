import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Tproduct } from "../../admin/products/schema";

const productsAdapter = createEntityAdapter<Tproduct>({
  sortComparer: (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
});

const initialState = productsAdapter.getInitialState({
  selectedProductId: null as string | null,
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: productsAdapter.setAll,
    addProduct: productsAdapter.addOne,
    // updateProduct: productsAdapter.updateOne,
    // removeProduct: productsAdapter.removeOne,
    setSelectedProductId: (state, action) => {
      state.selectedProductId = action.payload;
    },
  },
});

export const {
  setAllProducts,
  addProduct,
  //   updateProduct,
  //   removeProduct,
  setSelectedProductId,
} = productSlice.actions;

export default productSlice.reducer;

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
} = productsAdapter.getSelectors((state: any) => state.products);
