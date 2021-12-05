import Country from "./Country";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";
import "./CountryCard.css";

export default function () {
  return (
    <CardGroup>
      <Card
        className="my-3  "
        style={{
          width: "25rem",
          display: "flex",
          flexdirection: "col",
        }}
      >
        <Card.Header
          className="display-4"
          style={{
            background: "yellow",
          }}
        >
          Recipe Title
        </Card.Header>
        <Row className="g-2">
          <Col xs="5">
            <Card.Img img-fluid src="images/food.jpeg" />
          </Col>
          <Col xs="5">
            <Card.Body>
              <Card.Text className="text-start">
                <h4>Recipe Description</h4> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed eget dolor tempus, semper
                mauris nec, ornare sapien. Nullam a malesuada libero. Nullam
                accumsan tellus tristique, interdum diam quis, ultrices urna.
              </Card.Text>
              <Card.Text className="text-start h4">
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
          </Col>
        </Row>
      </Card>
    </CardGroup>
  );
}
