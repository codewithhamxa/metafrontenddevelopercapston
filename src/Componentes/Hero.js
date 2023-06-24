import React from "react";
import "./Hero.css";
import Restorent from "../Assets/restaurant.jpg"
import Chef from "../Assets/chef.jpg"

function Hero(){
    return(
        <>
            <div className="hero_content">
                <div className="hero_headings">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Find a table for any occasion</p>
                </div>
                <div className="hero_images">
                    <img src={Restorent} />
                    <img src={Chef} />
                </div>
            </div>
        </>
    )
};
export default Hero;