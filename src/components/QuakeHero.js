import React from 'react'

import IntroImg from "../assets/freezingfrictionhero.jpg";
import { Link } from 'react-router-dom';
import "./QuakeHero.css";

function QuakeHero() {
  return (
    <div className='hero'>
        <div className="mask intro-img">
        </div>
        <div className="hero-content">
            <h1>Quake: Temple of Worship</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque convallis. Donec eu dui ullamcorper, pharetra diam in, varius sem. Nulla facilisi. Curabitur feugiat arcu ut ligula lobortis, id tincidunt dui accumsan. Nam iaculis vulputate arcu et dignissim. Phasellus suscipit metus ac lacus euismod rutrum vitae in diam. 
                Mauris laoreet imperdiet leo vitae ornare. In hac habitasse platea dictumst. 
                </p>
        </div>
    </div>
  )
}

export default QuakeHero