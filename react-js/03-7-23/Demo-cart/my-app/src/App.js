import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import isAdminContext from "./context/isAdmin";

function App() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const logininfoAdmin = localStorage.getItem("LoggedInAdmin");
    const logininfoUsers = localStorage.getItem("LoggedInUsers");

    if (logininfoAdmin === "Admin" || logininfoUsers === "Users") {
      setLogIn(true);
    }
  }, []);

  return (
    <>
      <isAdminContext.Provider value={{ isAdmin: isAdmin }}>
        {!isLoggedIn && <Login setLogIn={setLogIn} setAdmin={setAdmin} />}
        {isLoggedIn && <Home setLogIn={setLogIn} />}
      </isAdminContext.Provider>
    </>
  );
}

export default App;
