import React, { useState, useEffect } from "react";

import Country from "./Country";
import useGetEntries from "./useGetEntries";

export default function CountryPage() {
  const { error, isLoading, recipes, countries } = useGetEntries();
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
