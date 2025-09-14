import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Cart from "./components/Cart";

import "./assets/style/responsive.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [statusMsg, setStatusMsg] = useState(""); // toggle message text
  const [shake, setShake] = useState(false); // shake effect
  const [statusType, setStatusType] = useState(""); // success | error | remove

  // Search recipes from API
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);

      if (!data.meals) {
        showMessage("No recipes found ❌", "error");
      } else {
        showMessage("Recipes found ✅", "success");
      }
    } catch (error) {
      console.error(error);
      setRecipes([]);
      showMessage("Error fetching recipes ❌", "error");
    }
    setLoading(false);
  };

  // Function to show animated message
  const showMessage = (message, type = "success", doShake = false) => {
    setStatusMsg(message);
    setStatusType(type);
    if (doShake) {
      setShake(true);
      setTimeout(() => setShake(false), 500); // stop shake after 0.5s
    }
    setTimeout(() => setStatusMsg(""), 3000); // auto-hide after 3s
  };

  // Toggle recipe in cart (like/unlike)
  const toggleCart = (meal) => {
    const exists = cart.find((item) => item.idMeal === meal.idMeal);
    if (exists) {
      showMessage("Already in favorites ❗", "error", true); // shake on duplicate
    } else {
      setCart([...cart, meal]);
      showMessage(`Added ✅ ${meal.strMeal}`, "success");
    }
  };

  // Remove recipe from cart explicitly
  const removeFromCart = (mealId) => {
    const meal = cart.find((item) => item.idMeal === mealId);
    setCart(cart.filter((item) => item.idMeal !== mealId));
    if (meal) {
      showMessage(`Removed ❌ ${meal.strMeal}`, "remove");
    }
  };

  return (
    <div className="app">
      {/* 🔔 Toggle Message */}
      {statusMsg && (
        <div className={`status-toggle ${statusType} ${shake ? "shake" : ""}`}>
          {statusMsg}
        </div>
      )}

      {/* Heading */}
      <h1 className="title">🍲 Recipe Finder</h1>

      {/* Search bar */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      {/* Loader */}
      {loading && <div className="loader"></div>}

      {/* Cart / Favorites */}
      <Cart cart={cart} removeFromCart={removeFromCart} />

      {/* Recipe List */}
      <RecipeList recipes={recipes} cart={cart} toggleCart={toggleCart} />
    </div>
  );
}

export default App;
