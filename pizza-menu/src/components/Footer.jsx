import React from "react";

export default function Footer() {
  // return React.createElement(
  //     'footer',
  //     null,
  //     "We are currently open"
  // )

  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = openHour <= hour && hour <= closeHour;

  // if(hour >= openHour && hour <= closeHour){
  //     alert("We are currently open")
  // }else{
  //     alert("Sorry we are closed")
  // }

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {isOpen
            ? ` We are Open untill ${closeHour}:00. Come Visit us or order online. `
            : ` We are currently Closed. Our hours are ${openHour}:00 to ${closeHour}:00`}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
