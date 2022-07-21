import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
//import { links, social } from './data';
import logo from '../logo.png';
import "../Styles/Navbar.css"

const Navbar = () => {
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img className="logo" src={logo} alt="logo" />
        <button className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <div className="links-container show-container">
        <ul className="links">
          <li>
            <a href="#">Birthday</a>
            <a href="#">Tours</a>
            <a href="#">Reviews</a>
            <a href="#">Accordion</a>
            <a href="#">Menu</a>
            <a href="#">Tabs</a>
            <a href="#">Slider</a>
            <a href="#">Lorem Ipsum</a>
            <a href="#">Grocery Bud</a>
            <a href="#">Navbar</a>
            <a href="#">Sidebar</a>
            <a href="#">Stripes</a>
            <a href="#">Cart</a>
            <a href="#">Cocktail</a>
            <a href="#">App</a>
          </li>
        </ul>
      </div>
      <ul className="social-logins"></ul>
    </div>
  </nav>
}

export default Navbar;