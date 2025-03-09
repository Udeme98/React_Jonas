import React from "react";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Focaccia"
        photoImage="/public/pizzaImages/focaccia.jpg"
        ingerdients="Bread with italian olive oil and rosemary"
        price={6}
      />
      <Pizza
        name="Funghi"
        photoImage="/public/pizzaImages/funghi.jpg"
        ingerdients="Bread with funghi"
        price={4}
      />
      <Pizza
        name="Spinaci"
        photoImage="/public/pizzaImages/spinaci.jpg"
        ingerdients="Tomato, mozarella, spinach, and ricotta cheese"
        price={7}
      />
    </main>
  );
};
const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.photoImage} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingerdients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Menu;
