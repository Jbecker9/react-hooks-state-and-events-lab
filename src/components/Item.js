import React, { useState } from "react";

function Item({ name, category }) {

  // const cart = [ setClass, setCart ] = useState("")

  function addCart(e){
    e.preventDefault()
    console.log(name)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
