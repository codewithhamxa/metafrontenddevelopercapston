import React from 'react';
import Header from "../Componentes/Header";
import "./ConfirmedBooking.css"
import Tick from "../Assets/tick.jpeg"
import Footer from "../Componentes/Footer";

function ConfirmedBooking() {
  return (
    <>
      <Header />
      <div className="hero_content">
        <div className="hero_headings">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
      </div>
      <section className='main'>
      <div className='main_content'>
          <h2>Table Reserved</h2>
      </div>
      <div className='confirmed_msg'>
          <h2>The Table Has Been Reserved Successfully!</h2>
          <p>You will get a confirmation and reminder witht he contact method selected by you</p>
          <img src={Tick}/>
      </div>
      </section>
      <Footer/>
    </>
  );
}

export default ConfirmedBooking;
