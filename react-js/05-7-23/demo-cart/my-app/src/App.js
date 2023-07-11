import { useEffect, useState, useContext } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import isAdminContext from "./context/isAdmin";

function App() {
  const [ctx, setProductCount, setProductsForCart, setAdmin, setLogIn] =
    useContext(isAdminContext);
  const { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;


  useEffect(() => {
    const logininfoAdmin = localStorage.getItem("LoggedInAdmin");
    const logininfoUsers = localStorage.getItem("LoggedInUsers");

    if (logininfoAdmin === "Admin" || logininfoUsers === "Users") {
      setLogIn(true);
      // console.log("login cooutn", productCountOfCart);
    }
  }, []);

  console.log("hello", ctx.productsForCart);

  return (
    <>
      {!isLoggedIn && <Login />}
      {isLoggedIn && <Home setLogIn={setLogIn} />}
    </>
  );
}

export default App;
