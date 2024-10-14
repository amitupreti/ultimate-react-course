import { useState } from "react";
import { Button } from "./Button";

export function SplitBill({ selectedFriend, handleUpdateBalance }) {
  const friendName = selectedFriend.name;

  const [bill, setBill] = useState(0);
  const [selfExpense, setSelfExpense] = useState(0);

  const friendsExpense = bill - selfExpense;
  const [paidBy, setpaidBy] = useState("self");

  function handleSubmit(e) {
    e.preventDefault();
    if (bill <= 0 || selfExpense <= 0) {
      return;
    } else {
      const existingBalance = selectedFriend.balance;
      let newBalance = existingBalance;
      if (paidBy === "self") {
        newBalance = existingBalance + (bill - selfExpense);
      } else {
        newBalance = existingBalance - selfExpense;
      }
      handleUpdateBalance(newBalance, selectedFriend.id);
      resetComponent();
    }
  }

  function resetComponent() {
    setBill(0);
    setSelfExpense(0);
    setpaidBy("self");
  }

  return (
    <form className="form-split-bill">
      <h2>{`Split a bill with ${friendName}`}</h2>
      <label htmlFor="bill-value">💰 Bill value</label>
      <input
        type="text"
        name="bill-value"
        value={bill}
        onChange={(e) => {
          setBill(Number(e.target.value));
        }}
      />
      <label htmlFor="expenses">🧍🏼 Your expense</label>
      <input
        type="text"
        name="expenses"
        value={selfExpense}
        onChange={(e) => {
          const currentSelfExpense = Number(e.target.value);
          return currentSelfExpense <= bill
            ? setSelfExpense(currentSelfExpense)
            : "";
        }}
      />
      <label htmlFor="expenses">👭 {friendName}'s expense</label>
      <input type="text" name="expenses" value={friendsExpense} readOnly />
      <label htmlFor="bill-payer">🤑 Who is paying the bill</label>
      <select
        type="text"
        name="bill-payer"
        value={paidBy}
        onChange={(e) => {
          setpaidBy(e.target.value);
        }}
      >
        <option value="self">You</option>
        <option value="friend">{friendName}</option>
      </select>

      <Button onClickHandler={handleSubmit}>Split Bill</Button>
    </form>
  );
}
