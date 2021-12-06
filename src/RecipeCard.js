import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import "./RecipeCard.css";

export default function RecipeCard(recipe) {
  return (
    <Container d-flex flex-column>
      <Row className="row-cols-2 g-3 my-2 ">
        <Col col-sm-4 col-sm-4>
          <Card
            className="my-2   d-flex flex-column"
            style={{ background: "#fcc5c5" }}
          >
            <Card.Img variant="top" src="images/food.jpeg"></Card.Img>
            <Card.Body>
              <Card.Title className="text-center">
                <h5>Recipe Title</h5>
              </Card.Title>
              <Card.Text className="text-start">
                <h6>Recipe Description:</h6> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed eget dolor tempus, semper
                mauris nec, ornare sapien. Nullam a malesuada libero. Nullam
                accumsan tellus tristique, interdum diam quis, ultrices urna.
              </Card.Text>
              <Card.Text className="text-start h5">
                Cooking Time : 3 hours
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
      </Row>
    </Container>
  );
}
