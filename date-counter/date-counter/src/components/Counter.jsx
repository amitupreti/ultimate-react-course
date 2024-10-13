import { useState, useEffect } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [message, setMessage] = useState(
  //   `Today's date is ${new Date().toDateString()}`
  // );

  // useEffect(() => {
  //   setMessage(() => {
  //     function getNewMessage() {
  //       if (count === 0) {
  //         return `Today's date is ${new Date().toDateString()}`;
  //       }
  //       let newDate = new Date();
  //       const days = count * step;
  //       console.log("step", step, "count", count, "days", days);
  //       newDate.setDate(newDate.getDate() + days);
  //       return `${days} days ${
  //         days >= 0 ? "from today" : "ago"
  //       } is ${newDate.toDateString()}`;
  //     }
  //     return getNewMessage();
  //   });
  // }, [count]);
  function handleCountDecrease() {
    setCount((c) => c - step);
  }
  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  function getNewMessage() {
    if (count === 0) {
      return `Today's date is ${new Date().toDateString()}`;
    }
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    return `${Math.abs(count)} days ${
      count >= 0 ? "from today" : "ago"
    } is ${newDate.toDateString()}`;
  }

  const message = getNewMessage();

  return (
    <div className="counter">
      <div>
        <span>
          Step: {step}{" "}
          <input
            type="range"
            name="slider"
            id="slider"
            min={"1"}
            max="100"
            value={step}
            onChange={(e) => {
              setStep(Number(e.target.value));
            }}
          />
        </span>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <span>
          <input
            type="text"
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
            }}
          />
        </span>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <div className="message">{message}</div>

      {count !== 0 || step !== 1 ? (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
