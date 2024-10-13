import { BillAmount } from "./BillAmount";
import { BillSummary } from "./BillSummary";
import { TipSelector } from "./TipSelector";
import { Reset } from "./Reset";
import { useState } from "react";

export function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmountSelf, setTipAmountSelf] = useState(0);
  const [tipAmountFriend, setTiptipAmountFriend] = useState(0);

  const averageTipPercentage = (tipAmountSelf + tipAmountFriend) / 2;
  const averageTipAmount = (averageTipPercentage / 100) * billAmount;
  const totalAmount = billAmount + averageTipAmount;

  function handleReset() {
    setBillAmount(0);
    setTipAmountSelf(0);
    setTiptipAmountFriend(0);
  }
  console.log(billAmount, tipAmountSelf, tipAmountFriend);
  return (
    <>
      <div className="container">
        <BillAmount
          onSetBillAmount={setBillAmount}
          billAmount={billAmount}
        ></BillAmount>
        <TipSelector
          onSetTipPercentage={setTipAmountSelf}
          tipPercentage={tipAmountSelf}
        >
          How did you like the service?
        </TipSelector>
        <TipSelector
          onSetTipPercentage={setTiptipAmountFriend}
          tipPercentage={tipAmountFriend}
        >
          How did your friend like the service?
        </TipSelector>
      </div>
      {billAmount > 0 ? (
        <div className="container">
          <BillSummary>{`You pay $${totalAmount} ($${billAmount} + $${averageTipAmount} or ${averageTipPercentage}% tip)`}</BillSummary>
          <Reset handleOnReset={handleReset}>Reset</Reset>
        </div>
      ) : (
        <div className="container">
          <BillSummary>{`Please add bill amount`}</BillSummary>
        </div>
      )}
    </>
  );
}
