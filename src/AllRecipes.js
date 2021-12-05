import React from "react";

export default function AllRecipes({ recipes, isLoading, error }) {
  const displayRecipe = () => {
    if (error) return <div>Error, please reload</div>;
    if (isLoading) return <div>Loading</div>;

    return recipes.map((recipe) => {
      return <li>{recipe.title}</li>;
    });
  };

  return <ul>{displayRecipe()}</ul>;
}
