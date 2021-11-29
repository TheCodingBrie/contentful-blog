import React, { useState, useEffect } from "react";
import { client } from "./client";
import Country from "./Country";

export default function CountryPage({ country }) {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => loadContent(), []);
  useEffect(() => divideContent(), [content]);

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

  return (
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
