import React from "react";
function Filter(props) {

    function handleCategoryChange(event) {
        const selectedCategory=event.target.value
        props.onCategoryChange(selectedCategory)
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
export default Filter