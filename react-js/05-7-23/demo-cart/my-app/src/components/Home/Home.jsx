import React from "react";
import HomeBlock from "./HomeBlock";
import Users from "../Users/Users";
import Products from "../Products/Products";

function Home(props) {

  
  return (
    <>
    {console.log("count in home",props.setProductCount)}
      <HomeBlock setLogIn={props.setLogIn}  />
      {/* {props.isAdmin===true && <Users/>}
      {props.isAdmin===false && <Products/>} */}
    </>
  );
}

export default Home;
