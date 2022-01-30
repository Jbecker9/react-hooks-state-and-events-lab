import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory , setSelectedCategory] = useState("All")
  const filterFoods = items.filter((item) =>{
    if (selectedCategory === "All"){
      return item
    }
    else{
      return item.category === selectedCategory
    }
  })

  function renderFood(e){
    console.log()
  }

  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={renderFood}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
