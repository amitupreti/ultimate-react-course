import React from "react";
import Pizza from "../Pizza";

export default function Menu(props) {
  const menuItemsAtLeastOne = props.menu.length > 0;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {menuItemsAtLeastOne ? (
        <React.Fragment>
          <p>
            Our restaurant offers a variety of delicious pizzas, made with fresh
            ingredients and cooked to perfection. From classic pepperoni to
            gourmet creations, there's something to satisfy every taste.
          </p>

          <ul className="pizzas">
            {props.menu.map((pizza) => (
              <Pizza data={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our Menu, please come back later.</p>
      )}
    </div>
  );
}
