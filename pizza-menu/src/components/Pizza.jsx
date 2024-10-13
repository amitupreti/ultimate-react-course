import React from "react";

export default function Pizza(pizzaProps) {
  return (
    <li className={`pizza ${pizzaProps.data.soldOut ? "sold-out" : ""}`}>
      <img src={`${pizzaProps.data.photoName}`} alt={pizzaProps.data.name} />
      <div>
        <h3>{pizzaProps.data.name}</h3>
        <p>{pizzaProps.data.ingredients}</p>
        <span>
          {pizzaProps.data.soldOut ? "Sold Out" : `$${pizzaProps.data.price}`}
        </span>
      </div>
    </li>
  );
}
