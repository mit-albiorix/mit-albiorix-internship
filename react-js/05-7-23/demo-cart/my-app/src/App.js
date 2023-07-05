import { useEffect, useState, useContext } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import isAdminContext from "./context/isAdmin";

function App() {
  const [ctx, setProductCount, setProductsForCart, setAdmin] =
    useContext(isAdminContext);
  const [isLoggedIn, setLogIn] = useState(false);

  // const [isLoggedInUser,setIsLoggedInUser] =useState(false)
  // const [isLoggedInAdmin,setIsLoggedAdmin] =useState(false)

  // const [isAdmin, setAdmin] = useState(false);
  // const [productCount, setProductCount] = useState(0);
  // const [productsForCart, setProductsForCart] = useState([]);

  // set the localstorage for cart

  useEffect(() => {
    const logininfoAdmin = localStorage.getItem("LoggedInAdmin");
    const logininfoUsers = localStorage.getItem("LoggedInUsers");
    const productCountOfCart = localStorage.getItem("prodoctsInCarts");
    const productsForCartFromLocalStoragestr =
      localStorage.getItem("productsOfCart");
    const productsForCartFromLocalStorage = JSON.parse(
      productsForCartFromLocalStoragestr
    );

   


    if (logininfoAdmin === "Admin" || logininfoUsers === "Users") {
      setLogIn(true);
      console.log("login cooutn",productCountOfCart);
    }

    if (productsForCartFromLocalStorage !== null) {
      setProductsForCart(productsForCartFromLocalStorage);
    }
    if (productCountOfCart !== null) {
      setProductCount(productCountOfCart);
    }
  }, []);

  useEffect(() => {
    // if (productsForCart.length > 0) {
    console.log("into cart", ctx.productsForCart);
    localStorage.setItem("productsOfCart", JSON.stringify(ctx.productsForCart));
    // }
  }, [ctx.productsForCart]);

  console.log("hello", ctx.productsForCart);

  return (
    <>
      {!isLoggedIn && <Login setLogIn={setLogIn} setAdmin={setAdmin} />}
      {isLoggedIn && <Home setLogIn={setLogIn} />}
    </>
  );
}

export default App;
