import React, { useState } from "react";
import "./Date.css";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("March 14 2025");
  date.setDate(date.getDate() + count);

  return (
    <div className="date-container">
      <div>
        <button onClick={() => setStep((prevStep) => prevStep - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - step)}>
          -
        </button>
        Count: {count}
        <button onClick={() => setCount((prevCount) => prevCount + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default DateCounter;
