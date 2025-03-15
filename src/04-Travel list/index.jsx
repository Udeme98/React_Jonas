import React from "react";
import "./travel.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Socks", quantity: 12, packed: true },
  { id: 4, description: "Socks", quantity: 12, packed: true },
  { id: 5, description: "Socks", quantity: 12, packed: true },
  { id: 6, description: "Socks", quantity: 12, packed: true },
  { id: 7, description: "Socks", quantity: 12, packed: true },
];

const Logo = () => {
  return <h1>🌴 Far Away 👜</h1>;
};

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
};

const ParkingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
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
