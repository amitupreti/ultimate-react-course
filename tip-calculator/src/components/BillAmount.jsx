import { Question } from "./Question";

export function BillAmount({ children, onSetBillAmount, billAmount }) {
  function handleOnChange(e) {
    onSetBillAmount(Number(e.target.value));
  }
  return (
    <>
      <span className="">
        <Question>How much was the bill?</Question>
        <input
          className="input-field"
          type="number"
          value={billAmount}
          onChange={handleOnChange}
        />
      </span>
    </>
  );
}
