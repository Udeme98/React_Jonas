import React, { useState } from "react";
import "./travel.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Socks", quantity: 12, packed: true },
];

const Logo = () => {
  return <h1>🌴 Far Away 👜</h1>;
};

const Form = ({ addItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    addItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const ParkingList = ({ items, deleteItem }) => {
  // console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );

  function Item({ item, deleteItem }) {
    return (
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => deleteItem(item.id)}>❌</button>
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
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <ParkingList items={items} deleteItem={deleteItem} />
      <Footer />
    </div>
  );
};

export default TravelList;
