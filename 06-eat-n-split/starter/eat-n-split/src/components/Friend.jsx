import { useState } from "react";
import { Button } from "./Button";

export function Friend({
  data,
  handleSetCurrentSplitFriend,
  currentSplitFriend,
}) {
  const isSelected = currentSplitFriend?.id === data.id;

  let message = "";
  const status = data.balance === 0 ? "" : data.balance < 0 ? "red" : "green";
  if (status === "red") {
    message = `You owe ${data.name} $${Math.abs(data.balance)}`;
  } else if (status === "green") {
    message = `${data.name} owes you  $${data.balance}`;
  } else {
    message = `You and ${data.name} are even`;
  }
  const buttonMessage = isSelected ? "Close" : "Select";

  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={data.image} alt={data.name} />

        <h3>{data.name}</h3>
        <p className={status}>{message}</p>

        <Button
          onClickHandler={() => {
            handleSetCurrentSplitFriend(isSelected ? null : data);
          }}
        >
          {buttonMessage}
        </Button>
      </li>
    </>
  );
}
