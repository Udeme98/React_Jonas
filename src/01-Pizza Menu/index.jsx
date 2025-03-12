import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import "./pizza.css";

const PizzaMenu = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default PizzaMenu;
