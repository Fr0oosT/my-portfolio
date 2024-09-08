import React from "react";
import "./Content.css";
import { Link} from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { PiPlaceholderLight } from "react-icons/pi";
import { SiUnrealengine } from "react-icons/si";

const Content = () => {
  return (
    <div className="content">
              <div className="title">
          <h1>Projects</h1>
        </div>
      <div className="exp-container">
        <div>
          <Link to={"/quake"} className="project-link">
            <div className="project-card">
              <h2 className="project-name">Quake : Temple of Worship</h2>
              <p className="project-role">Role: Level-Designer</p>
              <h4 className="project-text">Project Description</h4>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque convallis. Donec eu dui ullamcorper, pharetra diam in, varius sem. Nulla facilisi. </p>
              <div className="project-icons">
              <div className="project-icon">
              <HiUserGroup size={60} style={{ color: "#fff" }}/>
              <p>SOLO</p>
              </div>
              <div className="project-icon">
              <IoMdTime className="project-ticon" size={60} style={{ color: "#fff" }}/>
              <p>8 WEEKS</p>
              </div>
              <div className="project-icon">
              <PiPlaceholderLight className="project-picon" size={60} style={{ color: "#fff" }}/> 
              <p>Trenchbroom</p>
              </div>
              </div>
            </div>
            {/* <div className="project-image">
              <img src="https://picsum.photos/300/400" alt="" />
            </div> */}
            <div className="project-video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/je3cLLHC878?si=KRxftMQeo5-fNXj0" frameborder="1"></iframe>
            </div>
          </Link>
        </div>

        <div>
          <Link to={"/freezing-friction"} className="project-link">
            <div className="project-card">
              <h2 className="project-name">Freezing Friction</h2>
              <p className="project-role">Role: Level-Designer</p>
              <h4 className="project-text">Project Description</h4>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque convallis. Donec eu dui ullamcorper, pharetra diam in, varius sem. Nulla facilisi. </p>
              <div className="project-icons">
              <div className="project-icon">
              <HiUserGroup size={60} style={{ color: "#fff" }}/>
              <p>18</p>
              </div>
              <div className="project-icon">
              <IoMdTime className="project-ticon" size={60} style={{ color: "#fff" }}/>
              <p>8 WEEKS</p>
              </div>
              <div className="project-icon">
              <SiUnrealengine className="project-picon" size={60} style={{ color: "#fff" }}/> 
              <p>Unreal Engine</p>
              </div>
              </div>
            </div>
            {/* <div className="project-image">
              <img src="https://picsum.photos/300/400" alt="" />
            </div> */}
            <div className="project-video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/D8CmanxbUBw?si=ih4wPEJCeDwu4InK" frameborder="1"></iframe>
            </div>
          </Link>
        </div>

        <div>
          <Link to={"/thief"} className="project-link">
            <div className="project-card">
              <h2 className="project-name">Thief: Stealth System</h2>
              <p className="project-role">Role: System-Designer / Level Designer</p>
              <h4 className="project-text">Project Description</h4>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum hendrerit lacus eu semper. Morbi pulvinar pellentesque convallis. Donec eu dui ullamcorper, pharetra diam in, varius sem. Nulla facilisi. </p>
              <div className="project-icons">
              <div className="project-icon">
              <HiUserGroup size={60} style={{ color: "#fff" }}/>
              <p>SOLO</p>
              </div>
              <div className="project-icon">
              <IoMdTime className="project-ticon" size={60} style={{ color: "#fff" }}/>
              <p>8 WEEKS</p>
              </div>
              <div className="project-icon">
              <SiUnrealengine className="project-picon" size={60} style={{ color: "#fff" }}/> 
              <p>Unreal Engine</p>
              </div>
              </div>
            </div>
            {/* <div className="project-image">
              <img src="https://picsum.photos/300/400" alt="" />
            </div> */}
            <div className="project-video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t3owOEcD3Rs?si=3H7zIp5pr7L-Vvea" frameborder="1"></iframe>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Content;
