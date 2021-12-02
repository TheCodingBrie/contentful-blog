import { useState } from "react";
import "./App.css";
//import ReactGlobeGl from "react-globe.gl";
import CountryPage from "./CountryPage";
import Recipe from "./Recipe";
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert } from 'react-bootstrap';



function App() {
  const [country, setCountry] = useState("Canada");

  return (
    <div className="App">
      <Button> Test Button </Button>
      <CountryPage country={country} />
      <Recipe />

      
      {/* <ReactGlobeGl
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeClick
      /> */}
      {/* <Recipe /> */}
    </div>
  );
}

export default App;
