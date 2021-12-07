import React from "react";
import { useState } from "react";
import logo from "./images/logo.png";
import "./App.css";
import { NavLink } from "react-router-dom";

export default function Menu({ countries, isLoading, error, setShow }) {
  const [navbar, setNavbar] = useState(true);
  const handleMenu = () => {
    setNavbar(!navbar);
  };

  const displayMenu = () => {
    if (error) return <div>Error, please reload</div>;
    if (isLoading) return <div>Loading</div>;

    return countries.map((country) => {
      return (
        <NavLink key={country.countryTitle} to={`/${country.countryTitle}`}>
          {country.countryTitle}
          <img
            width="25px"
            src={country.countryFlag.fields.file.url}
            alt=""
          ></img>
        </NavLink>
      );
    });
  };

  const handleModal = () => {
    setShow(true);
  };
  return (
    <>
      <img
        className="logo"
        onClick={handleMenu}
        width="100px"
        src={logo}
        alt=""
      ></img>
      <div className={`menu ${navbar ? "no-menu" : ""}`}>
        <NavLink onClick={handleModal} className="allRecipes" to="/allrecipes">
          All Recipes
        </NavLink>
        <div className="countryMenu">
          <div>Countries</div>
          <div className="dropdown">{displayMenu()}</div>
        </div>
        <NavLink onClick={handleModal} className="contact" to="/contact">
          Contact
        </NavLink>
        <NavLink onClick={handleModal} className="contact" to="/country">
          Country
        </NavLink>
        <NavLink onClick={handleModal} className="contact" to="/recipe">
          Recipe
        </NavLink>
      </div>
    </>
  );
}

<div className="allRecipes">All recipes</div>;
