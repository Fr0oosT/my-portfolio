import React from 'react'

import IntroImg from "../assets/freezingfrictionhero.jpg";
import { Link } from 'react-router-dom';
import "./Hero.css";

function Hero() {
  return (
    <div className='hero'>
        <div className="mask">
            <img className="intro-img "src={IntroImg} alt="Freezing Friction" />
        </div>
        <div className="hero-content">
            <h1>SETH COHEN</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque convallis. Donec eu dui ullamcorper, pharetra diam in, varius sem. Nulla facilisi. Curabitur feugiat arcu ut ligula lobortis, id tincidunt dui accumsan. Nam iaculis vulputate arcu et dignissim. Phasellus suscipit metus ac lacus euismod rutrum vitae in diam. 
                Mauris laoreet imperdiet leo vitae ornare. In hac habitasse platea dictumst. 
                </p>
                <div className='resume-btn'>
                    <Link to="/resume" className='btn'>CV</Link>
                </div>
        </div>
    </div>
  )
}

export default Hero