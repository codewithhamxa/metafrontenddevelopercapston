import React from "react";
import logo from "../Assets/logo.png"
import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <header className="header">
                <nav className="header_nav">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <div className="header_logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </Link>
                    <ul>
                        <Link to="/" style={{ textDecoration: "none", marginRight: "30px" }}>
                            <li> <a href="#">Home</a> </li>
                        </Link>
                        <li> <a href="#">About</a> </li>
                        <li><a href="#">Menu</a></li>
                        <Link to="/Reservation" style={{textDecoration: "none" , marginRight: "30px"}}>
                            <li><a href="#">Reservations</a></li>
                        </Link>
                        <li><a href="#">Order online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;