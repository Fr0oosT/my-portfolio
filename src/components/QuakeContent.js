import React from "react";
import "./QuakeContent.css";
import { AiOutlineArrowDown } from "react-icons/ai";

function QuakeContent() {
  return (
    <div className="quake-container">
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
    </div>



    <div className="quake-title">

    <h1>My Process</h1>
    </div>

    <div className="highlights">
        <ul>
          <li>
            <p>Research</p>
          </li>
          <li>
            <p>Sketching</p>
          </li>
          <li>
            <p>Gym Investigation</p>
          </li>
          <li>
            <p>Iteration</p>
          </li>
          <li>
            <p>Texturing & Lighting</p>
          </li>
          <li>
            <p>Ninjapaths</p>
          </li>
        </ul>
      </div>
      

      <div className="info-wrapper">
        <div className="info-card">
          <h1>Step 1: Title</h1>
          <img></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis
          </p>
        </div>

        <div className="arrow">
            <AiOutlineArrowDown size={60} style={{ color: "#fff" }} />
        </div>

        <div className="info-card">
          <h1>Step 2: Title</h1>
          <img></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis
          </p>
        </div>

        <div className="arrow">
            <AiOutlineArrowDown size={60} style={{ color: "#fff" }} />
        </div>

        <div className="info-card">
          <h1>Step 3: Title</h1>
          <img></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis
          </p>
        </div>

        <div className="arrow">
            <AiOutlineArrowDown size={60} style={{ color: "#fff" }} />
        </div>

        <div className="info-card">
          <h1>Step 4: Title</h1>
          <img></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque
            convallis
          </p>
        </div>
      </div>

    </div>
  );
}

export default QuakeContent;
