// import React, { useState, useEffect } from "react";
import { client } from "./client";
import Country from "./Country";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import useGetEntries from "./useGetEntries";
import Image from "react-bootstrap/Image";
import CountryCard from "./CountryCard";
import "./CountryCard.css";

export default function CountryPage() {
  const { error, isLoading, recipes, countries } = useGetEntries();
  function displayContent() {
    if (error) return <div>Something went wrong, try reloading the page</div>;
    // add a loading image?
    if (isLoading) return <div>Content loading, please remain seated</div>;

    return <Country countries={countries} />;
  }
  //content -> filter to have only the correct country -> send the object to the country page as props -> destructure the props and pass it where needed
  // content -> filter to have the correct recipes in an array -> send the array as props to the country page -> map the recipes to create the card components -> destructure the object prop into the card to display it
  return (
    <Container className="d-flex flex-column ">
      <div className="flag-image">
        <img className="rounded  " src="images/germanflag.jpeg" />
      </div>
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Container>
  );
}
