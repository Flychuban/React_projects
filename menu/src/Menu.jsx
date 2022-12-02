import React from "react";

export default function Menu(props){
    return(
        <div className="section-center">
            {props.items.map(menuItem =>{
                const {id, title, category, price, img, desc} = menuItem
                return(
                    <article key={id} className="menu-item">
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}