import React, { useState } from "react";
import "./flashCard.css";

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
    // console.log(id);
  };

  const questions = [
    {
      id: 1,
      question: "What Language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 2,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 3,
      question:
        "What is the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 4,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 5,
      question: "How to give components memory",
      answer: "useState hook",
    },
    {
      id: 6,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];

  return (
    <div>
      <h2>Flashcards Exercise</h2>
      <div className="container">
        <div className="flashcards">
          {questions.map((ques) => (
            <div
              key={ques.id}
              className={`flashcard ${
                selectedId === ques.id ? "selected" : ""
              }`}
              onClick={() => handleClick(ques.id)}
              // onClick={() =>
              //   setSelectedId(selectedId === ques.id ? null : ques.id)
              // }
            >
              <p>{selectedId === ques.id ? ques.answer : ques.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
