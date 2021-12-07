import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import RecipeCard from "./RecipeCard";
import Row from "react-bootstrap/Row";
import "./Country.css";

export default function Country({ countries, recipes, isLoading, error }) {
  const { country } = useParams();

  //.countryReference.field.countryTitle === "Germany"
  function displayContent() {
    if (error) return <div>Something went wrong, try reloading the page</div>;
    if (isLoading) return <div>Content loading, please remain seated</div>;

    return (
      <Container className="d-flex flex-column    ">
        <h1 className="text-center">{country}</h1>
        <div className="flag-image">
          <img
            style={{ width: "15vh" }}
            className="rounded"
            src={
              countries.find((item) => item.countryTitle === country)
                .countryFlag.fields.file.url
            }
            alt=""
          />
        </div>
        <Container>
          <Row className="g-3 my-2 ">
            {recipes
              .filter((recipe) => {
                return recipe.countryReference.fields.countryTitle === country;
              })
              .map((recipe) => {
                return (
                  <RecipeCard
                    key={recipe.title}
                    recipe={recipe}
                    isLoading={isLoading}
                    error={error}
                  />
                );
              })}
          </Row>
        </Container>
      </Container>
    );
  }

  return displayContent();
}
