// import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import RecipeCard from "./RecipeCard";
import Row from "react-bootstrap/Row";
import "./Country.css";

export default function Country({ recipes, isLoading, error }) {
  function displayContent() {
    if (error) return <div>Something went wrong, try reloading the page</div>;
    if (isLoading) return <div>Content loading, please remain seated</div>;

    return (
      <Container className="d-flex flex-column    ">
        <h1 className="text-center">Country Page</h1>
        <div className="flag-image">
          <img
            style={{ width: "15vh" }}
            className="rounded"
            src="images/germanflag.jpeg"
            alt=""
          />
        </div>
        <Container>
          <Row className="g-3 my-2 ">
            {recipes.map((recipe) => {
              return <RecipeCard key={recipe.title} recipe={recipe} />;
            })}
          </Row>
        </Container>
      </Container>
    );
  }

  return displayContent();
}
