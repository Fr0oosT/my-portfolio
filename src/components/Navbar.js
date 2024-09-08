import "./NavbarStyles.css";

import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleMouseEnter = () => {
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(false);
  };

  const[color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    // <div className={color ? "header header-bg" : "header"}>
    <div className="header">

      {/* <nav className="header-content"> */}
      <nav className={color ? "header-content header-bg" : "header"}>

      <Link to="/">
      <div className="nav-info">
        <h3 className="nav-title">Seth Cohen</h3>
        <p>-</p>
        <h3 className="nav-role">Level Designer</h3>
        </div>
      </Link>
      <ul className={click ? "nav.menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="" className="nav-item">Projects </Link>
            {openDropdown && <Dropdown/>}
          </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
