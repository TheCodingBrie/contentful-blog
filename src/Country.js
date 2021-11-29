import React from "react";

export default function Country({ countries }) {
  return (
    <ul>
      {countries.map((countries) => {
        return <li>{countries.countryTitle}</li>;
      })}
    </ul>
  );
}
