import React, { useState, useEffect } from "react";
import "./RecipeCard.css";

function RecipeCard({ meal, cart, toggleCart }) {
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [visible, setVisible] = useState(false); // fade-in

  // Fade-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sync liked state with cart
  useEffect(() => {
    const isInCart = cart.some((item) => item.idMeal === meal.idMeal);
    setLiked(isInCart);
  }, [cart, meal.idMeal]);

  const handleLike = (e) => {
    // Fly-to-cart animation
    const card = e.currentTarget.closest(".recipe-card");
    if (!liked) {
      card.classList.add("fly");
      setTimeout(() => card.classList.remove("fly"), 600);
    }

    toggleCart(meal); // toggles add/remove automatically
  };

  return (
    <div className={`recipe-card ${visible ? "visible" : ""}`}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="recipe-img" />
      <h2 className="recipe-title">{meal.strMeal}</h2>

      <div className="card-footer">
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "filled-star" : "empty-star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
