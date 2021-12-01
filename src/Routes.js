import { Routes, Route } from "react-router-dom";

import App from "./App";

export default function WFFRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
}
