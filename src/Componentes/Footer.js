import React from "react";
import './Footer.css'
import logo from '../Assets/logo2.PNG'

function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav_links">
                    <h3>Navigation</h3>
                    <p> <a href="#">Home</a> </p>
                    <p> <a href="#">About</a> </p>
                    <p><a href="#">Menu</a></p>
                    <p><a href="#">Reservations</a></p>
                    <p><a href="#">Order online</a></p>
                    <p><a href="#">Login</a></p>
                    
                </div>
                <div className="contact_info">
                    <h3>Contact</h3>
                    <p>Chicago</p>
                    <p>+92 3071995311</p>
                    <p>Chicago@gmail.com</p>
                </div>
                <div className="social_links">
                    <h3>Social Media</h3>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;