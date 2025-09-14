import React from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Favorites Cart</h2>

      {cart.length === 0 && <p className="cart-empty">No recipes added yet.</p>}

      <div className="cart-items">
        {cart.map((meal) => (
          <div key={meal.idMeal} className="cart-item">
            <div className="cart-item-info">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <span className="cart-item-name">{meal.strMeal}</span>
              <span className="cart-heart">❤️</span> {/* heart with border */}
            </div>
            <button onClick={() => removeFromCart(meal.idMeal)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
