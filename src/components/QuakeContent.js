import React from "react";
import "./QuakeContent.css";

function QuakeContent() {
  return (
    <div className="content-wrapper">
      <div className="title-card">
        <h1>Quake : Temple of Worship</h1>
        <div className="project-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis
          </p>
        </div>
      </div>

      <div className="highlights">
        <ul>
            <li><p>Highlight</p></li>
            <li><p>Highlight</p></li>
            <li><p>Highlight</p></li>
            <li><p>Highlight</p></li>
        </ul>
      </div>

    <h1 className="title">My Process</h1>

      <div className="info-card">
        <h1>Step 1: Title</h1>
        <img></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis</p>
      </div>

    <div className="arrow"><h4>INSERT ARROW</h4></div>

      <div className="info-card">
        <h1>Step 2: Title</h1>
        <img></img>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis</p>
      </div>
    </div>
  );
}

export default QuakeContent;
