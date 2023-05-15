import React, { useState } from "react";
import Item from "./Item";

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
            <Filter setCategory={setCategory}></Filter>
            <ul className="Items">
                {itemsToDisplay.map((item) => (
                    <Item key={item.id} name={item.name} category={item.category} />
                ))}
            </ul>
        </div>
    );
}
function Filter(props) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
        props.setCategory(selectedCategory)
    }
    return (
        <div className="Filter">
            <select name="filter" onChange={handleCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}

export default ShoppingList;
