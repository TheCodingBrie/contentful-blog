import { useState } from "react";
import "./App.css";
import ReactGlobeGl from "react-globe.gl";
import React from "react";
import Menu from "./Menu";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Menu />
      <outlet />
      <ReactGlobeGl
        className="globe"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      />
    </div>
  );
}

export default App;
