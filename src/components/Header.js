import React from 'react'
import Typed from "react-typed";
import bg from "../wall-and-laptop-background.jpg"



const Header = () => {
    return (
        <div  className="header-wrapper">
            <div className="main-info">
                <h1> Web Development and Social Media Marketing</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <a href ="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default Header
