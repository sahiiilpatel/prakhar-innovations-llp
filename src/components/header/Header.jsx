import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../header/header.css";
import logo from '../data/logo.png'


function Header() {

  const location = useLocation()

  return (
    <header>
      <nav>
        <ul>
         
        <img src={logo} alt="Logo" className="logo" />
        
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marketOpportunity"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Market Opportunity
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/investors"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Investors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
