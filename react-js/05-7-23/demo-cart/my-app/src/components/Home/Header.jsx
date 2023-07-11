import React, { useContext } from "react";
// for select
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  AppBar,
  Toolbar,
} from "@mui/material";

import isAdminContext from "../../context/isAdmin";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Header() {
  const [ctx, setProductCount, setProductsForCart, setAdmin, setLogIn] =
    useContext(isAdminContext);
  let { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;

  const [profileText, setProfileText] = React.useState(""); //  it is for to change the value for the select menu for admin and logoutz
  const handleChange = (event) => {
    setProfileText(event.target.value.toString());
  };

  const navigate = useNavigate();
  const cartHandler = () => {
    navigate("/cart");
  };

  const logoutHandler = () => {
    setLogIn(false);
    localStorage.removeItem("LoggedInAdmin");
    localStorage.removeItem("LoggedInUsers");
  };

  const drawerWidth = 240;
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar style={{ backgroundColor: "#faf2f2cf" }}>
          <FormControl
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <InputLabel id="demo-simple-select-label">
              {ctx.isAdmin ? "Admin" : "Users"}
            </InputLabel>
            <Select
              style={{ width: "150px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profileText}
              label="Admin"
              onChange={handleChange}
            >
              <MenuItem value={"logout"} onClick={logoutHandler}>
                LogOut
              </MenuItem>
            </Select>
          </FormControl>

          {ctx.isAdmin === false && (
            <div>
              {/* <NavLink to="/cart"></NavLink> */}
              <ShoppingCartIcon onClick={cartHandler} />
              <span className="count">{ctx.productCount}</span>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
