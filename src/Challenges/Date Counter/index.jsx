import React, { useState } from "react";
import "./Date.css";

const DateCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    //Version 2
    <div className="date-container">
      <input
        type="range"
        min="0"
        max={10}
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <div>Step: {step}</div>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prevCount) => prevCount + step)}>
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day${count === 1 ? "" : "s"} from today is `
            : `${Math.abs(count)} day${count === -1 ? "" : "s"} ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>

    //Version 1
    // <div className="date-container">
    //   <div>
    //     <button onClick={() => setStep((prevStep) => prevStep - 1)}>-</button>
    //     Step: {step}
    //     <button onClick={() => setStep((prevStep) => prevStep + 1)}>+</button>
    //   </div>
    //   <div>
    //     <button onClick={() => setCount((prevCount) => prevCount - step)}>
    //       -
    //     </button>
    //     Count: {count}
    //     <button onClick={() => setCount((prevCount) => prevCount + step)}>
    //       +
    //     </button>
    //   </div>
    //   <p>
    //     <span>
    //       {count === 0
    //         ? "Today is "
    //         : count > 0
    //         ? `${count} days from today is`
    //         : `${Math.abs(count)} days ago was `}
    //     </span>
    //     <span>{date.toDateString()}</span>
    //   </p>
    // </div>
  );
};

export default DateCounter;
