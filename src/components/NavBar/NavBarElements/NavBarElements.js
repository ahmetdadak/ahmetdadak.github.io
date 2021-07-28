import React from "react";
import { Link } from 'react-router-dom'
import "./NavBarElements.css";
const NavBarElements = () => {
  return (
    <ul className="NavBarElements">
      <li>
        <Link to="/" style={{textDecoration: "none"}}>Ahmet Dadak</Link>
      </li>
      {/*
      <li>
        <Link to="/blog" style={{textDecoration: "none"}}>Blog</Link>
      </li>
      */}
    </ul>
  );
};

export default NavBarElements;
