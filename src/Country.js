// import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
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
          return <RecipeCard key={recipe.title} recipe={recipe} />;
        })}
      </Container>
    );
  }

  return displayContent();
}
