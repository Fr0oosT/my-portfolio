import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quake from "./pages/projects/Quake";
import FreezingFriction from "./pages/projects/FreezingFriction";
import Thief from "./pages/projects/Thief";


import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quake" element={<Quake />} />
      <Route path="/freezing-friction" element={<FreezingFriction />} />
      <Route path="/thief" element={<Thief />} />

    </Routes>
    </>
  );
}

export default App;
