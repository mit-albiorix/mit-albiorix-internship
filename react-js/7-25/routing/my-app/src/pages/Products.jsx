import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
  ];
  return (
    <>
      <h1>products</h1>
      <ul>
        {products.map((pro) => {
          return (
            <li>
              <Link to={`/products/${pro.id}`}>{pro.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
