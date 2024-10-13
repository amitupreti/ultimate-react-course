import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) return;
    setStep((s) => s - 1);
  }

  function handleNext() {
    if (step === 3) return;

    setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((io) => !io)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <Message step={step}>{messages[step - 1]}</Message>
          <div className="buttons">
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClickHandler={handlePrevious}
            >
              <span>⬅️</span>Previous
            </Button>

            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClickHandler={handleNext}
            >
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, backgroundColor, onClickHandler, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

function Message({ children, step }) {
  return (
    <>
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>
    </>
  );
}
