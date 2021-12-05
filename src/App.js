import { useState } from "react";
import "./App.css";
import ReactGlobeGl from "react-globe.gl";
import CountryPage from "./CountryPage";
import React from "react";
import Menu from "./Menu";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <CountryPage />
      <Menu />
      <outlet />

      <ReactGlobeGl
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeClick
      />
    </div>
  );
}

export default App;
