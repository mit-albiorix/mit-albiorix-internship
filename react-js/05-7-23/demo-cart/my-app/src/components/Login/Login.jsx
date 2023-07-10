import React, { useState, useContext } from "react";
import { TextField, Container, Button } from "@mui/material";
import isAdminContext from "../../context/isAdmin";

function Login(props) {
  const [ctx, setProductCount, setProductsForCart, setAdmin, setLogIn] =
    useContext(isAdminContext);
  let { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;

  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const loginHandler = () => {
    setFormInput({
      username: formInput.username,
      password: formInput.password,
    });

    if (formInput.username.length < 3 || formInput.password.length < 3) {
      alert(
        "length of the email and password minimum 3! please fill it correctly!"
      );
    } else {
      if (formInput.username == "Admin" && formInput.password == "admin123") {
        localStorage.setItem("LoggedInAdmin", "Admin");
        setAdmin(true);
        console.log("admin logged in");
      } else {
        localStorage.setItem("LoggedInUsers", "Users");
        setAdmin(false);
        console.log("users loggedin");
      }

      setLogIn(true);
    }
  };

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "100px",
          width: "800px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Login Here!</h3>
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          value={formInput.username}
          onChange={(e) => {
            setFormInput((prevState) => {
              return {
                ...prevState,
                username: e.target.value,
              };
            });
          }}
          required
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={formInput.password}
          onChange={(e) => {
            setFormInput((prevState) => {
              return {
                ...prevState,
                password: e.target.value,
              };
            });
          }}
          required
        />
        <br />
        <Button
          style={{ width: "120px" }}
          variant="contained"
          onClick={loginHandler}
        >
          Login
        </Button>
        <br />
      </Container>
    </>
  );
}

export default Login;
