import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;      
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default productSlice.reducer;
