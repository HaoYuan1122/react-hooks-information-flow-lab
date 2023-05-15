import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    function setCategory(fromFilter){
        setSelectedCategory(fromFilter)
    }
    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
    });

    return (
        <div className="ShoppingList">
            <Filter onCategoryChange={setCategory}></Filter>
            <ul className="Items">
                {itemsToDisplay.map((item) => (
                    <Item key={item.id} name={item.name} category={item.category} />
                ))}
            </ul>
        </div>
    );
}


export default ShoppingList;
