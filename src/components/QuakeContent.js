import React from "react";
import "./QuakeContent.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

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
          <div className="quake-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/je3cLLHC878?si=KRxftMQeo5-fNXj0"
              frameborder="1"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="quake-title">
        <h1>My Process</h1>
      </div>

      <div className="highlights">
        <ul>
          <li>
          <Link className='btn'>Research</Link>
          </li>
          <li>
          <Link className='btn'>Sketching</Link>
          </li>
          <li>
          <Link className='btn'>Gym Investigation</Link>
          </li>
          <li>
          <Link className='btn'>Iteration</Link>
          </li>
          <li>
          <Link className='btn'>Texturing & Lighting</Link>
          </li>
          <li>
          <Link className='btn'>NInjapaths</Link>
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
