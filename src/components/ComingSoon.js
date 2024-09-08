import React from 'react'
import "./ComingSoon.css";
import { Link } from 'react-router-dom';
function ComingSoon() {
  return (
    <div className="comingsoon">
        <Link to={"/"}>
        <h1>Coming Soon!</h1>  
        </Link>
        </div>
  )
}

export default ComingSoon