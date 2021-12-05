import { useState, useEffect } from "react";
import { client } from "./client";

export default function useGetEntries() {
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(loadContent, []);
  useEffect(divideContent, [content]);

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
      })
      .catch(() => setError(true));
  }

  function divideContent() {
    setCountries(content.filter((content) => content.countryTitle));
    setRecipes(content.filter((content) => content.title));
  }

  return { error, isLoading, recipes, countries };
}
