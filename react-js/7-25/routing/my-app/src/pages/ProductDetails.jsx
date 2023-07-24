import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const params =useParams()
    console.log(params.productId);
  return (
    <div>
      <h1>prodducts details page</h1>
      <p> {params.productId}</p>
     
    </div>
  );
}

export default ProductDetails;
