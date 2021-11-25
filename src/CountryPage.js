import React /*, { useState }*/ from "react";
import { client } from "./client";

export default function CountryPage() {
  // const [state, setState] = useState();

  client
    .getEntries()
    .then((response) => {
      console.log(response);
    })
    .catch(console.error);
  return (
    <div className="container">
      <header>
        <div className="wrapper">
          <span>React and Contentful</span>
        </div>
      </header>
      <main>
        <div className="wrapper"></div>
      </main>
    </div>
  );
}
