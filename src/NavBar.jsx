import React from "react";
import "./style/navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="mainBar">
        <div className="logo">
          <h1><NavLink className="navbar" to="/">AMAZING...</NavLink></h1>
        </div>
        <div className="otherSec">
          <div className="sec1">
            <li><NavLink className="navbar" style={({isActive}) => {return{textDecoration: isActive ? 'underline' : 'none', textUnderlinePosition: isActive ? 'under' : ''}}} to="/">Home</NavLink></li>
            <li><NavLink className="navbar" style={({isActive}) => {return{textDecoration: isActive ? 'underline' : 'none', textUnderlinePosition: isActive ? 'under' : ''}}} to="/about">About</NavLink></li>
            <li><NavLink className="navbar" style={({isActive}) => {return{textDecoration: isActive ? 'underline' : 'none', textUnderlinePosition: isActive ? 'under' : ''}}} to="/contact">Contact</NavLink></li>
          </div>
          <div className="sec2">
            <li><NavLink className="navbar" to="/login">Login</NavLink></li>
            <li><NavLink className="navbar" to="/register">Register</NavLink></li>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
