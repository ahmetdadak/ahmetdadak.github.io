import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import "./SocialMediaElements.css";
const SocialMediaElements = (props) => {
  return (
    <ul className="SocialMediaElements">
      <li>
        <a href="https://github.com/ahmetdadak">
          <FaGithub className="Github" size={props.size}/>
        </a>
      </li>
      <li>
        <a href="https://www.kaggle.com/ahmetdadak">
          <FaKaggle className="Kaggle" size={props.size}/>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ahmetdadak">
          <FaLinkedin className="Linkedin" size={props.size}/>
        </a>
      </li>
      <li>
        <a href="https://medium.com/@ahmetdadak">
          <FaMedium className="Medium" size={props.size}/>
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaElements;
