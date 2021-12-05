import React, { useState, useEffect } from "react";
import { client } from "./client";
import Container from "react-bootstrap/Container";
import useGetEntries from "./useGetEntries";
import CountryCard from "./CountryCard";
import "./CountryCard.css";

export default function CountryPage() {
  const { error, isLoading, recipes, countries } = useGetEntries();
  function displayContent() {
    if (error) return <div>Something went wrong, try reloading the page</div>;
    // add a loading image?
    if (isLoading) return <div>Content loading, please remain seated</div>;

    // return <Country countries={countries} />;
  }

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
