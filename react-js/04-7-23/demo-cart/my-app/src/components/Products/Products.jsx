import React from "react";
import ProductsCard from "./ProductsCard";

function Products(props) {
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>Here! Your Products!</h2>
      </div>
      <br />
      <ProductsCard setProductCount={props.setProductCount}/>
    </>
  );
}

export default Products;
