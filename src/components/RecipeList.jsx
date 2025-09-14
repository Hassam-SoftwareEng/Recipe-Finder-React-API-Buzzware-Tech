import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, cart, toggleCart }) {
  return (
    <div className="recipe-list">
      {recipes.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          meal={meal}
          cart={cart}
          toggleCart={toggleCart} // pass toggle function
        />
      ))}
    </div>
  );
}

export default RecipeList;
