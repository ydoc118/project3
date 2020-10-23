import React from "react";
import "../../pages/Business"


export function BusinessList({ children }) {
    return <ul>{children}</ul>
}

export function BusinessListItem(props) {
    return(
        <p className="busButton">
            <a className=" btn btn-block btn-dark" href={"/business/" + props.id}><strong>{props.business}</strong></a> 
        </p>
    )
}