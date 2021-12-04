import React, { useState, useEffect } from "react";
import { client } from "./client";
import Country from "./Country";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Image from "react-bootstrap/Image";
import "./countrypage.css";

export default function CountryPage({ country }) {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => loadContent(), []);
  useEffect(() => divideContent(), [content]);
  console.log(content);
  function loadContent() {
    setIsLoading(true);
    client
      .getEntries()
      .then((response) => {
        setIsLoading(false);
        setContent(
          response.items.map((item) => {
            return item.fields;
          })
        );
        divideContent();
      })
      .catch(() => setError(true));
  }

  const divideContent = () => {
    setCountries(content.filter((content) => content.countryTitle));
    setRecipes(content.filter((content) => content.Title));
  };

  function displayContent() {
    if (error) return <div>Something went wrong, try reloading the page</div>;
    // add a loading image?
    if (isLoading) return <div>Content loading, please remain seated</div>;

    return <Country countries={countries} />;
  }
  //content -> filter to have only the correct country -> send the object to the country page as props -> destructure the props and pass it where needed
  //content -> filter to have the correct recipes in an array -> send the array as props to the country page -> map the recipes to create the card components -> destructure the object prop into the card to display it
  return (
    <Container className="d-flex flex-column ">
      <h1></h1>
      <div className="d-flex">
        <img className="rounded  float-end " src="images/germanflag.jpeg" />
      </div>

      <CardGroup>
        <Card
          className="my-0 custom-card"
          style={{
            width: "45rem",
            background: "#d6d4d4",
            display: "flex",
            flexDirection: "col",
          }}
        >
          <Card.Header className="display-4" style={{ background: "#faed75" }}>
            Recipe Title
          </Card.Header>
          <Row className="g-2">
            <Col xs="5">
              <Card.Img src="images/food.jpeg" />
            </Col>
            <Col xs="6">
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
    </Container>

    <div className="container">
      <header>
        <div className="wrapper">
          <span>WorldWideFood</span>
        </div>
      </header>
      <main>
        <div className="wrapper">{displayContent()}</div>
      </main>
    </div>
  );
}
