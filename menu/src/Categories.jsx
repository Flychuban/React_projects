import React from "react";

export default function Categories(props){
    return(
        <div className="btn-container">
            {props.categories.map((category, index) =>{
                return(
                    <button type="button" className="filter-btn" onClick={() => props.filterItems(category)} key={index}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}