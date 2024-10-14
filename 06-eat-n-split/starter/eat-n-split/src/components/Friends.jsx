import { useState } from "react";
import { Friend } from "./Friend";

export function Friends({
  friendList,
  handleSetCurrentSplitFriend,
  currentSplitFriend,
}) {
  return (
    <>
      <ul>
        {friendList.map((friend) => (
          <Friend
            data={friend}
            key={friend.id}
            handleSetCurrentSplitFriend={handleSetCurrentSplitFriend}
            currentSplitFriend={currentSplitFriend}
          />
        ))}
      </ul>
    </>
  );
}
