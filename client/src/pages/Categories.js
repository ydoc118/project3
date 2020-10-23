import React, { useState, useEffect } from "react";
import API from "../utils/API";
import './Home.js'
import { BusinessList, BusinessListItem } from "../components/BusinessList/index";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);
    const [currentCat, setCurrentCat] = useState();
    const [businessHTML, setBusinessHTML] = useState("none")

    useEffect(() => {
        loadCategories();
    },[]);

    function loadCategories() {
        API.getCategories(categories)
            .then(res => {
                setCategories(res.data)
            });
    };

    function handleClick(event) {
        event.preventDefault();
        setCurrentCat(event.target.innerHTML)
        setBusinessHTML("flex")
        API.getCategory(event.target.innerHTML)
            .then(res => {
                setBusiness(res.data)
            });
    };


    return (
        <div className="container">
            <div className='card'>
                <h1>Categories</h1>
                <ul>
                    {categories.map(category => {
                        return (<h3  key={category._id}>
                            <a className="btn btn-block btn-dark" href={"/categories/" + category._id} style={{fontWeight: "bold"}} onClick={handleClick}>
                                {category.categoryList}
                            </a>
                        </h3>
                        )
                    })}
                </ul>
            </div>
            <div style={{display: businessHTML}} className='card cardBottom'>
                <h1 style={{display: businessHTML}}>{currentCat} Businesses</h1>
                <BusinessList>
                    {
                        business.map((business, i) => {
                            return <BusinessListItem className="btn btn-block btn-outline-dark" business={business.business} description={business.description} discount={business.discount} id={business._id} key={i} />
                        })
                    }
                </BusinessList>
            </div>

        </div >
    )

}

export default Categories;