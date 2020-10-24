import React from "react";
import {Link} from "react-router-dom"
import "../../pages/Business"


export function BusinessList({ children }) {
    return <ul>{children}</ul>
}

export function BusinessListItem(props) {
    return(
        <p className="busButton">
            <Link className=" btn btn-block btn-dark" to={"/business/" + props.id}><strong>{props.business}</strong></Link> 
        </p>
    )
}