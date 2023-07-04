import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import isAdminContext from "./context/isAdmin";


function App() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const logininfoAdmin = localStorage.getItem("LoggedInAdmin");
    const logininfoUsers = localStorage.getItem("LoggedInUsers");
    const productCountOfCart =localStorage.getItem("prodoctsInCarts")

    if (logininfoAdmin === "Admin" || logininfoUsers === "Users" && productCountOfCart >0) {
      setLogIn(true);
      setProductCount(productCountOfCart)
    }
  }, []);

  return (
    <>
      <isAdminContext.Provider value={{ isAdmin: isAdmin ,productCount:productCount}}>
        {!isLoggedIn && <Login setLogIn={setLogIn} setAdmin={setAdmin} />}
        {isLoggedIn && <Home setLogIn={setLogIn} setProductCount={setProductCount}/>}
      </isAdminContext.Provider>
      
    </>
  );
}

export default App;
