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
          </li>
          <li>
            <a href="#">Tours</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Accordion</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>            
            <a href="#">Tabs</a>
          </li>
          <li>
            <a href="#">Slider</a>
          </li>
          <li>
            <a href="#">Lorem Ipsum</a>
          </li>
          <li>
            <a href="#">Grocery Bud</a>
          </li>
          <li>
            <a href="#">Navbar</a>
          </li>
          <li>
            <a href="#">Sidebar</a>
          </li>
          <li>
            <a href="#">Stripes</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Cocktail</a>
          </li>
          <li>
            <a href="#">App</a>
          </li>
        </ul>
      </div>
      <ul className="social-logins">
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter/>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter/>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <FaTwitter/>
          </a>
        </li>
      </ul>
    </div>
  </nav>
}

export default Navbar;