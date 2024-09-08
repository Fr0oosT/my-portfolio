import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css"

import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-name">
                <h3>Seth Cohen</h3>
            </div>
            <div className="icons">
                <FaLinkedin size={20} style={{ color: "#fff" }} />
                <FaEnvelope size={20} style={{ color: "#fff" }} />
                <FaTwitter size={20} style={{color: "#fff"}} />

            </div>
        </div>
    </div>
  );
};

export default Footer