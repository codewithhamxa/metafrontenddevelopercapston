import React from "react";
import "./Testimonials.css";



function Testimonials (props){
    return(
        <>
            <div className="testimonial_card">
                <p> {props.stars} </p>
                <div className="user_info">
                    <img src={props.avatar} />
                    <h4>{props.name}</h4>
                </div>
                <p className="review">{props.review}</p>
            </div>
        </>
    )
}
export default Testimonials;