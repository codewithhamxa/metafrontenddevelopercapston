import React from "react";
import "./Main.css";
import heroimage from "../Assets/heroimg.jpg"
import Menu from "./Menu";
import Testimonials from "./Testimonials";
import GreekSalad from "../Assets/greek salad.jpg";
import burshata from "../Assets/bursheta.png";
import lemon from "../Assets/lemon dessert.jpg";

import Person from "../Assets/person.png";
import Person2 from "../Assets/person2.png";
import Person3 from "../Assets/person 3.png";
import Person4 from "../Assets/person4.png";

import food from "../Assets/food.png";
import { Link } from "react-router-dom";


function Main() {
  return (
    <>
      <main>
        <section className="hero_section">
            <div className="hero">
            <div className="hero_details">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                We are family owned Mediterranean <br/>
                    restaurant, focused on traditional <br/>
                    recipes served with a modern twist.
                </p>
                <Link to="/Reservation" style={{textDecoration: "none"}}>
                    <a href="#">Reserve a table</a>
                </Link>
               
            </div>
            <div className="hero_image">
                <img src={heroimage} />
            </div>
            </div>
        </section>
        <section className="menu_section">
            <div className="menu_title">
                <h2>This week specials!</h2>
                <a href="#">Online Menu</a>
            </div>
            <div className="menu_cards">
                <Menu 
                    imageSrc={GreekSalad}
                    Title1= "Greek Salad"
                    Title2= "$12.99"
                    Para = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                    Link= "Order a delivery"
                />
                   
                <Menu 
                    imageSrc={burshata}
                    Title1= "Bruchetta"
                    Title2= "$5.99"
                    Para = "Our Bruschetta is very tasty and made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    Link= "Order a delivery"
                />
                <Menu 
                    imageSrc={lemon}
                    Title1= "Lemon Dessert"
                    Title2= "$5.00"
                    Para = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    Link= "Order a delivery"
                />
            </div>
        </section>
        <section className="testimonial_section">
            <div className="testimonial_title">
                <h2>What our costumers says</h2>
            </div>
            <div className="testimonial_cards">
                <Testimonials 
                    stars = "⭐⭐⭐⭐⭐"
                    avatar = {Person}
                    name = "Adin jeo"
                    review = "Such a chilled out atmosphere - love it!"
                />
                <Testimonials 
                    stars = "⭐⭐⭐⭐"
                    avatar = {Person2}
                    name = "Harry lee"
                    review = "Such a chilled out atmosphere - love it!"
                />
                <Testimonials 
                    stars = "⭐⭐⭐⭐⭐"
                    avatar = {Person3}
                    name = "Mia latina"
                    review = "Such a chilled out atmosphere - love it!"
                />
                <Testimonials 
                    stars = "⭐⭐⭐⭐"
                    avatar = {Person4}
                    name = "Rose Marry"
                    review = "Such a chilled out atmosphere - love it!"
                />
            </div>
        </section>
        <section className="about">
            <div className="About_info">
                <div className="about_text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua  <br/>
                    dolor do amet sint. Velit officia consequat duis enim  <br/>
                    velit mollit. Exercitation veniam consequat sunt nostrud amet. <br/>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor  <br/>
                    do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="about_image">
                    <img src={food} className="food"/>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
export default Main;
