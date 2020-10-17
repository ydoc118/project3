import React, { useState, useEffect, Children } from "react";
import API from "../utils/API";
import {BusinessListItem, BusinessList} from "../components/BusinessList/index"

function Businesses() {
    const [currentBus, setCurrentbus] = useState({});

    console.log()

    useEffect(() => {
        loadBusiness();
    });

    function loadBusiness(props) {
        API.getBusiness(props.id)
            .then(res => {
                console.log(res.data)
                setCurrentbus(res.data)
            })
    }

    return(
        <div>
            <h1>BUSINESS PAGE</h1>
            
        </div>
    )

}

export default Businesses;
