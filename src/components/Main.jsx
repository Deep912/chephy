import React from "react";
import IngredientsList from "./IngredientsList";
import AiResponce from "./AiResponce";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    console.log("wait for response");
    let recipeFromAi = await getRecipeFromMistral(ingredients);
    setRecipe(recipeFromAi);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <AiResponce recipe={recipe} />}
    </main>
  );
};

export default Main;
