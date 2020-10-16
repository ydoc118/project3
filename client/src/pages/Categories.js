import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadCategories();
    });

    function loadCategories() {
        API.getCategories(categories)
            .then(res => {
                setCategories(res.data)
            })
    }

    return(
        <div>
            <h1>HELLO WORLD</h1>
            <ul>
                {categories.map(category => {
                    return (<li key={category._id}>
                        <strong>{category.categoryList}</strong>
                    </li>
                )})}
            </ul>
        </div>
    )

}

export default Categories;