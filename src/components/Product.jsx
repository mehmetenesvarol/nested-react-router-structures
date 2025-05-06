import React from "react"
import { useNavigate } from "react-router-dom";

function Product({product}) {

  const { id, name, price } = product

  const navigate = useNavigate()

  return (
    <div style={{padding: "10px 10px 5px 40px", backgroundColor:"lightgray" }}>
      <h2>ID : {id}</h2>
      <h2>Name : {name}</h2>
      <h2>Price : {price}$</h2>
      <button onClick={()=> navigate("/details/"+ id)}>Details</button>
      <hr />
    </div>
  );
}

export default Product
