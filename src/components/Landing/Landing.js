import React from "react";
import NavBar from "../NavBar/NavBar";
import Name from "../Name/Name";
import Title from "../Title/Title";
import SocialMedia from "../SocialMedia/SocialMedia";
import About from "../About/About";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Name marginTop={"8vh"} />
        <Title marginTop={"5vh"} />
        <About marginTop={"5vh"}/>
        <SocialMedia marginTop={"8vh"} />
      </div>
    </div>
  );
};

export default Landing;
