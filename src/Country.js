// import React, { useState, useEffect } from "react";
import { client } from "./client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import RecipeCard from "./RecipeCard";
import "./Country.css";

export default function Country({ recipes, isLoading, error }) {
  function displayContent() {
    if (error) return <div>Something went wrong, try reloading the page</div>;
    if (isLoading) return <div>Content loading, please remain seated</div>;

    return (
      <Container className="d-flex flex-column ">
        <div className="flag-image">
          <img className="rounded" src="images/germanflag.jpeg" alt="" />
        </div>
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </Container>
    );
  }

  return displayContent();
}
