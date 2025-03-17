import React, { useState } from "react";
import "./travel.css";
import { Logo } from "./Logo";

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

const ParkingList = ({ items, deleteItem, handleToggle, clearList }) => {
  const [sortBy, setSortBy] = useState("input");
  // console.log(items);

  let sortedtems;

  if (sortBy === "input") sortedtems = items;
  if (sortBy === "description")
    sortedtems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedtems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedtems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );

  function Item({ item, deleteItem, handleToggle }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleToggle(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => deleteItem(item.id)}>❌</button>
      </li>
    );
  }
};

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (!items.length) {
    return (
      <footer className="footer">
        <em>Start adding some items to your packing list🚀</em>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go✈️"
          : ` You have ${numItems} item${
              numItems !== 1 ? "s" : ""
            } on your list, you
        already packed ${numPacked} (${percentage}%)`}
      </em>
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

  const handleToggle = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <ParkingList
        items={items}
        deleteItem={deleteItem}
        handleToggle={handleToggle}
        clearList={clearList}
      />
      <Footer items={items} />
    </div>
  );
};

export default TravelList;
