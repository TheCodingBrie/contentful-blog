import { Routes, Route } from "react-router-dom";
import useGetEntries from "./useGetEntries";
import App from "./App";
import AllRecipes from "./AllRecipes";
import Contact from "./Contact";

export default function WFFRoutes() {
  const { error, isLoading, recipes, countries } = useGetEntries();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <App
            recipes={recipes}
            countries={countries}
            isLoading={isLoading}
            error={error}
          />
        }
      >
        <Route
          path="allrecipes"
          element={
            <AllRecipes recipes={recipes} isLoading={isLoading} error={error} />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}
