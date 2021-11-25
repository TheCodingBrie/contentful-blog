import "./App.css";
import ReactGlobeGl from "react-globe.gl";

function App() {
  return (
    <div className="App">
      <ReactGlobeGl
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      />
    </div>
  );
}

export default App;
