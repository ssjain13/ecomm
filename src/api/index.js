import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com";

export const fetchProducts = createAsyncThunk(
  "products/getAll",
  async (thunkAPI) => {
    const res = await fetch(`${baseURL}/products`)
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        return err;
      });
    return res;
  }
);
export const fetchCategories = createAsyncThunk(
  "categories/getAll",
  async (thunkAPI) => {
    try {
      const data = await fetch(`${baseURL}/products/categories`);
      const categories = await data.json();
      return categories;
    } catch (err) {
      return err;
    }
  }
);
export const getAllCategories = async () => {
  try {
    const data = await fetch(`${baseURL}/products/categories`);
    const categories = await data.json();
    return categories;
  } catch (err) {
    return err;
  }
};

export const checkout = async (product) => {
  try {
    const data = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return await data.json();
  } catch (err) {
    return err;
  }
};
