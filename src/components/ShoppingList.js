import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory , setSelectedCategory] = useState("All")
  
  function filterChange(e){
    setSelectedCategory(e.target.value)
  }

  const filterFoods = items.filter((item) =>{
    if (selectedCategory === "All"){
      return true
    } else {
      return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterFoods.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
