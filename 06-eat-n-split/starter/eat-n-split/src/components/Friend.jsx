import { useState } from "react";

export function Friend({
  data,
  handleSetSplitFormOpen,
  handleSetCurrentSplitFriend,
  currentSplitFriend,
  handleSetAddFriendFormOpen,
}) {
  let message = "";
  const status = data.balance === 0 ? "" : data.balance < 0 ? "red" : "green";
  if (status === "red") {
    message = `You owe ${data.name} $${Math.abs(data.balance)}`;
  } else if (status === "green") {
    message = `${data.name} owes you  $${data.balance}`;
  } else {
    message = `You and ${data.name} are even`;
  }
  const buttonMessage = currentSplitFriend !== data.id ? "Select" : "Close";

  function handleSplitBill(e) {
    const buttonText = e.target.innerHTML;
    if (buttonText === "Select") {
      handleSetSplitFormOpen(true);
      handleSetCurrentSplitFriend(data.id);
    } else {
      handleSetSplitFormOpen(false);
      handleSetCurrentSplitFriend(null);
    }
    handleSetAddFriendFormOpen(false);
  }
  return (
    <>
      <li>
        <img src={data.image} alt={data.name} />

        <h3>{data.name}</h3>
        <p className={status}>{message}</p>
        <button className="button" onClick={handleSplitBill}>
          {buttonMessage}
        </button>
      </li>
    </>
  );
}
