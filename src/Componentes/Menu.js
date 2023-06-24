import React from "react";
import "./Menu.css";

function Menu(props){
    return(
        <>
            <div className="menu_card">
                <img src={props.imageSrc} alt="Greek Salad" className="menu_image"/>
                <div className="menu_details">
                    <div className="menu_heading">
                        <h3>{props.Title1}</h3>
                        <h3>{props.Title2}</h3>
                    </div>
                    <p>{props.Para}</p>
                    <a href="#">{props.Link}</a>
                </div>
            </div>
        </>
    )
};
export default Menu;