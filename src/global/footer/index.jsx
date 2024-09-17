import React from 'react'
import "./styles.scss"
import logo from "/logo.png"
import { MdLocationPin, MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="logo">
                <div className="image">
                    <img src={logo} alt="logo" />
                </div>
                <div className="words">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis iste omnis numquam porro quia similique nisi adipisci optio iusto a?</p>
                </div>
            </div>
            <div className="quickLinks">
                <h1>Quick Links</h1>
                <ul>
                    <li className='link'>Home</li>
                    <li className='link'>Menu</li>
                    <li className='link'>Veg</li>
                    <li className='link'>Non-Veg</li>
                    <li className='link'>Corprate Box</li>
                </ul>
            </div>
            <div className="quickLinks">
                <h1>Contact info</h1>
                <ul>
                    <li><MdOutlineLocalPhone /> +91 9086xxxxxx</li>
                    <li><MdOutlineEmail /> xyz@gmail.com</li>
                    <li><MdLocationPin /> Near main street, Ludhiana, India, 1821xx</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer