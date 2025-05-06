import React from "react";

function DetailProduct({ product }) {
  return (
    <div  style={{padding:"40px", backgroundColor:"lightgray" }}>
      <h1>ID : {product.id}</h1>
      <h3>Name : {product.name}</h3>
      <h3>Detalis : {product.detail}</h3>
      <h2>{product.price}$</h2>
    </div>
  );
}

export default DetailProduct;
