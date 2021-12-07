import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import RecipeCard from "./RecipeCard";

export default function AllRecipes({ recipes, isLoading, error }) {
  const displayRecipe = () => {
    if (error) return <div>Error, please reload</div>;
    if (isLoading) return <div>Loading</div>;

    return (
      <Container>
        <Row className="g-3 my-2 ">
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe.title} recipe={recipe} />;
          })}
        </Row>
      </Container>
    );
  };

  return <ul>{displayRecipe()}</ul>;
}
