import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./RecipeCard.css";

export default function RecipeCard({ recipe, isLoading, error }) {
  if (error) return <div>Something went wrong, try reloading the page</div>;
  if (isLoading) return <div>Content loading, please remain seated</div>;
  return (
    <Col md={5}>
      <Card
        className="  my-2"
        style={{ background: "#fcc5c5", cursor: "pointer" }}
      >
        <Card.Img
          variant="top"
          src={recipe.recipeImage.fields.file.url}
        ></Card.Img>
        <Card.Body>
          <Card.Title className="text-center">
            <h5>{recipe.title}</h5>
          </Card.Title>
          <Card.Text className="text-start">
            <h6>Recipe Description:</h6>
            {recipe.recipeDescription}
          </Card.Text>
          <Card.Text className="text-start h5">
            {recipe.recipeInfos.map((info) => {
              return <div>{info}</div>;
            })}
          </Card.Text>
          <Card.Img
            className="float-left"
            style={{ width: "70px" }}
            src="images/gluten-free.png"
          />
          <Card.Img
            className="float-left"
            src=" images/vegetarian.png"
            style={{ width: "70px" }}
          />
        </Card.Body>
      </Card>
    </Col>
  );
}
