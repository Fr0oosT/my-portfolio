import React from 'react';
import "./DropDown.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Dropdown () {
    const [dropdown, setDropdown] = useState(false); 

    const[color, setColor] = useState(false);
    const changeColor = () => {
      if(window.scrollY >=1){
        setColor(true);
      }else{
        setColor(false);
      }
    }
      window.addEventListener("scroll", changeColor);
  return (
    <>
        <ul className={dropdown ? 'flex flex-col dropDown clicked' : "flex flex-col dropDown"} onClick={() => setDropdown(!dropdown)}> 
            <li><Link to="/quake" onClick={() => setDropdown(false)}><p>Quake</p></Link></li>
            <li><Link to="/freezing-friction" onClick={() => setDropdown(false)}><p>Freezing Friction</p></Link></li>
            <li><Link to="/thief" onClick={() => setDropdown(false)}><p>Thief: Stealth System</p></Link></li>
        </ul>
    </>
  );
}



// {color ? "flex flex-col dropDown dropdown-bg" : "flex flex-col dropDown"}
export default Dropdown
