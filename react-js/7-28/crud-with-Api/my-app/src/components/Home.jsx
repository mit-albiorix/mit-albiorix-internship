import React from "react";
import { Button } from "@mui/material";

import Products from "./Products";

function Home() {
    const addProductHandler =() =>{

    }
    
  return (
    <div>
      {/* <Button variant="contained" onClick={addProductHandler}>Add Products</Button> */}
      {/* <Button variant="contained" onClick={addProductHandler}>Add Products</Button> */}


      <Products />
    </div>
  );
}

export default Home;
