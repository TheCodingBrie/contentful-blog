import { useState } from "react";
import "./App.css";
//import ReactGlobeGl from "react-globe.gl";
import CountryPage from "./CountryPage";
import React from "react";

function App() {
  const [country, setCountry] = useState("Canada");

  return (
    <div className="App">
      <CountryPage country={country} />
      {/* <ReactGlobeGl
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeClick
      /> */}
    </div>
  );
}

export default App;
