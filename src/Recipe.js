import { Button, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import useGetEntries from "./useGetEntries";

export default function Recipe() {
  const { error, isLoading, recipes } = useGetEntries();
  console.log(recipes);

  const displayRecipe = () => {
    if (error) return <div>Error, please reload</div>;
    if (isLoading) return <div>Loading</div>;

    const recipe = recipes[0];

    return (
      <div>
        <div className="recipeImage">
          <img
            width="300px"
            src={recipe.recipeImage.fields.file.url}
            alt=""
          ></img>
        </div>

        <div className="recipeTitle">
          <h1>{recipe.title}</h1>
        </div>

        <div className="recipeInfos">
          <p>{recipe.recipeInfos}</p>
        </div>

        <div className="recipeDescription">
          <p>{recipe.recipeDescription}</p>
        </div>

        <div className="ingedients">
          {" "}
          <p>{recipe.recipeIngredients}</p>{" "}
        </div>

        <div className="instructions">
          <p>{recipe.recipeDirections} </p>
        </div>

        <div className="Footer">Recipe lovingly inspired from WonderChefs</div>
      </div>
    );
  };
  return displayRecipe();
}
