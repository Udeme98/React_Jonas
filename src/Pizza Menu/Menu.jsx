import React from "react";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
};
const Pizza = () => {
  return (
    <>
      <img src="/public/pizzaImages/focaccia.jpg" />
      <h3>Focaccia</h3>
      <p>Tomato, Mozarella, Spinach, and Ricotta cheese</p>
    </>
  );
};

export default Menu;
