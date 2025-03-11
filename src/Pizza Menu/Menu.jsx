import React from "react";
import { pizzaData } from "./pizzaData";

const Menu = () => {
  //   console.log(pizzaData);

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObj={pizza} key={pizza.name} />;
        })}
      </ul>
    </main>
  );
};

const Pizza = (props) => {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default Menu;
