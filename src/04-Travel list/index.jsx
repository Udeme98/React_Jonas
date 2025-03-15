import React from "react";
import "./travel.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

const Logo = () => {
  return <h1>🌴 Far Away 👜</h1>;
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
};

const ParkingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
  function Item({ item }) {
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    );
  }
};

const Footer = () => {
  return (
    <footer className="footer">
      <em>You have X item on your list, you already packed X(X%)</em>
    </footer>
  );
};

const TravelList = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <ParkingList />
      <Footer />
    </div>
  );
};

export default TravelList;
