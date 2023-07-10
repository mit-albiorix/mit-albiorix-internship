import React, { useState } from "react";
// import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import isAdminContext from "./../../context/isAdmin";
import Cart from "../Cart/Cart";
import App from "../../App";
import CartProduct from "../Cart/CartProduct";

function Parent() {
  const [isAdmin, setAdmin] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [productsForCart, setProductsForCart] = useState([]);
  const [isLoggedIn, setLogIn] = useState(false);

  return (
    <>
      <isAdminContext.Provider
        value={[
          {
            isAdmin: isAdmin,
            isLoggedIn :isLoggedIn,
            productCount: productCount,
            productsForCart: [...productsForCart],
            
          },
          setProductCount,
          setProductsForCart,
          setAdmin,
          setLogIn
        ]}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/product" element={<CartProduct/>} />

          </Routes>
        </BrowserRouter>
      </isAdminContext.Provider>
    </>
  );
}

export default Parent;
