import { Routes, Route } from "react-router-dom";
import useGetEntries from "./useGetEntries";
import App from "./App";
import AllRecipes from "./AllRecipes";
import Contact from "./Contact";
import Country from "./Country";
import Recipe from "./Recipe";

export default function WFFRoutes() {
  const { error, isLoading, recipes, countries } = useGetEntries();

  console.log(recipes);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <App countries={countries} isLoading={isLoading} error={error} />
        }
      >
        <Route
          path="allrecipes"
          element={
            <AllRecipes recipes={recipes} isLoading={isLoading} error={error} />
          }
        />
        <Route
          path=":country"
          element={
            <Country
              countries={countries}
              recipes={recipes}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route
          path="recipe"
          element={
            <Recipe
              key={"0"}
              recipes={recipes}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}
