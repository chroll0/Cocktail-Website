"use client";
import React, { useState } from "react";
import "./Navbar.css";
import { MdMenuBook, MdRestaurantMenu } from "react-icons/md";

const navBar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(false);

  return (
    <nav>
      <div className="navbar-logo">
        <a href="/">
          <img
            src="/cocktail.png"
            alt="logo"
            width={33}
            height={33}
            cursor="pointer"
            className={`animate__animated ${
              !hoveredIcon ? "" : "animate__wobble"
            }`}
            onMouseEnter={() => setHoveredIcon(!hoveredIcon)}
            onMouseLeave={() => setHoveredIcon(!hoveredIcon)}
          />
        </a>
      </div>
      <div className="nav-container">
        <ul className="navbar-links">
          <li>
            <a href="#aboutUs">about</a>
          </li>
          <li>
            <a href="#menu">menu</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="small-navbar-container">
        {!navMenu ? (
          <MdMenuBook
            onClick={() => setNavMenu(true)}
            size={25}
            cursor={"pointer"}
          />
        ) : (
          <MdRestaurantMenu
            onClick={() => setNavMenu(false)}
            size={25}
            cursor={"pointer"}
          />
        )}
      </div>
      {navMenu && (
        <div className="small-navbar">
          <ul className="small-navbar-links">
            <li>
              <a href="#aboutUs">about</a>
            </li>
            <li>
              <a href="#menu">menu</a>
            </li>
            <li>
              <a href="#gallery">gallery</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default navBar;
