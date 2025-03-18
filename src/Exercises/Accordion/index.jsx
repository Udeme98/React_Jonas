import React, { useState } from "react";
import accordion from "./accordion";
import "./accordion.css";

const Accordion = () => {
  return (
    <div>
      {accordion.map((el, i) => (
        <AccordionItem key={el.title} num={i} title={el.title} text={el.text} />
      ))}
    </div>
  );
};

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-item">
      <div onClick={handleToggle} className="header plus">
        <p>{num + 1}</p>
        <p>{title}</p>
        <p className="plus">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div>{text}</div>}
    </div>
  );
};

export default Accordion;
