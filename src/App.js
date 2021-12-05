import { useState, useEffect, useMemo } from "react";
import "./App.css";
import ReactGlobeGl from "react-globe.gl";
import CountryPage from "./CountryPage";
import React from "react";
import Menu from "./Menu";
import ReactModal from "react-modal";
import ModalWindow from "./ModalWindow";
import Recipe from "./Recipe";

ReactModal.setAppElement("#root");

function App({ countries, error, isLoading }) {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <CountryPage />
      <Menu />
      <outlet />

      {/* <Menu
        countries={countries}
        isLoading={isLoading}
        error={error}
        setShow={setShow}
      />
      <ReactGlobeGl
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeClick
      />
      <ModalWindow show={show} setShow={setShow} /> */}
      <Recipe />
    </div>
  );
}

export default App;
