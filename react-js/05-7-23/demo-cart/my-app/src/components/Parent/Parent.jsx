import React, { useState } from "react";
// import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import isAdminContext from "./../../context/isAdmin";
import Cart from "../Cart/Cart";
import App from "../../App";

function Parent() {
  const [isAdmin, setAdmin] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [productsForCart, setProductsForCart] = useState([]);

  return (
    <>
      <isAdminContext.Provider
        value={[
          {
            isAdmin: isAdmin,
            productCount: productCount,
            productsForCart: [...productsForCart],
          },
          setProductCount,
          setProductsForCart,
          setAdmin,
        ]}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </isAdminContext.Provider>
    </>
  );
}

export default Parent;
