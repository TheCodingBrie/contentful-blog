import React from "react";
import { useState } from "react";
import logo from "./images/logo.png";
import "./App.css";
import useGetEntries from "./useGetEntries";
import { NavLink } from "react-bootstrap";

export default function Menu({ countries, isLoading, error }) {
  const [navbar, setNavbar] = useState(true);
  console.log(navbar);
  const handleMenu = () => {
    setNavbar(!navbar);
  };

  const displayMenu = () => {
    if (error) return <div>Error, please reload</div>;
    // add a loading image?
    if (isLoading) return <div>Loading</div>;

    return countries.map((country) => {
      return (
        <a href="{#}">
          {country.countryTitle}
          <img
            width="25px"
            src={country.countryFlag.fields.file.url}
            alt=""
          ></img>
        </a>
      );
    });
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
        <NavLink className="allRecipes" to="/allrecipes">
          All Recipes
        </NavLink>
        <div className="countryMenu">
          <div>Countries</div>
          <div className="dropdown">{displayMenu()}</div>
        </div>
        <div className="contact">Contact</div>
      </div>
    </>
  );
}

<div className="allRecipes">All recipes</div>;
