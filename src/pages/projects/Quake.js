import React from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ComingSoon from "../../components/ComingSoon"
import QuakeContent from "../../components/QuakeContent";
import QuakeHero from "../../components/QuakeHero";

const Quake = () => {
    return <div>    
    <Navbar/>
    {/* <QuakeHero/> */}
    <QuakeContent/>
    <Footer/>
</div>;
};

export default Quake;