import { Alert, AlertIcon, Box, Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { fetchCategories, fetchProducts, getAllCategories } from "./api";
import { ShoppingCart } from "./components/ShoppingCart";
import { Filters } from "./components/filter";
import { Home } from "./components/Home";
import { Pageheader } from "./components/Pageheader";
import { CheckoutPage } from "./pages/CheckoutPage";
import {ShoppingAccordion  } from "./components/ShoppingAccordion";
import { SuccessPage } from "./pages/SuccessPage";

function App() {
  const { categories } = useSelector((state) => state.categories);

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Pageheader />
      <Routes>
        <Route path="/cart" element={<ShoppingCart />}></Route>
        {cartItems && (
          <Route path="/checkout" element={<ShoppingAccordion />}></Route>
        )}
        <Route path="/success" element={<SuccessPage />} />
        <Route
          path="/"
          element={
            <Box>
              <Filters categories={categories} />
              {loading && <Progress size="xs" isIndeterminate mt={"30px"} />}
              {!loading && <Home products={products} />}
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  There was an error processing your request
                </Alert>
              )}
            </Box>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
