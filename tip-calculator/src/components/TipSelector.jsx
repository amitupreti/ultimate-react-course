import { Question } from "./Question";

export function TipSelector({ children, onSetTipPercentage, tipPercentage }) {
  function handleOnChange(e) {
    onSetTipPercentage(Number(e.target.value));
  }
  return (
    <>
      <span className="">
        <Question>{children}</Question>

        <select
          className="dropdown"
          name="bill-percentage"
          id="bill-percentage"
          onChange={handleOnChange}
          value={tipPercentage}
        >
          <option value={0}>It was horrible (0%)</option>
          <option value={10}>It was satisfactory (10%)</option>
          <option value={20}>It was real good (20%)</option>
          <option value={30}>It was blown away(30%)</option>
        </select>
      </span>
    </>
  );
}
