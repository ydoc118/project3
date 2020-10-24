import React, { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom"
import API from "../utils/API";
import './Home.js'
import { BusinessList, BusinessListItem } from "../components/BusinessList/index";
import AuthContext from '../context/auth/authContext';

function Categories(props) {
    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);
    const [currentCat, setCurrentCat] = useState();
    const [businessHTML, setBusinessHTML] = useState("none")
    const [userName, setUserName] = useState();

    const authContext = useContext(AuthContext);
    const { isAuthenticated, user, loadUser } = authContext;

    useEffect(() => {
        if(isAuthenticated){
            loadUser()
            loadCategories();
            if(user){
                setUserName(user.name)
            }
        }else notAuthenticated();
        
    },[user]);

    function notAuthenticated() {
        alert("You must be logged in to use the app")
        props.history.push('/login');
    }

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
                <h1 style={{textDecoration: "underline"}}>Welcome, {userName}!</h1>
                <h1>Categories</h1>
                <ul>
                    {categories.map(category => {
                        return (<h3  key={category._id}>
                            <Link className="btn btn-block btn-dark" to={"/categories/" + category._id} style={{fontWeight: "bold"}} onClick={handleClick}>
                                {category.categoryList}
                            </Link>
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