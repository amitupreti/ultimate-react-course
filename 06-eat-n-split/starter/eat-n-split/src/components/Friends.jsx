import { useState } from "react";
import { Friend } from "./Friend";

export function Friends({
  friendList,
  handleSetSplitFormOpen,
  handleSetCurrentSplitFriend,
  currentSplitFriend,
  handleSetAddFriendFormOpen,
}) {
  return (
    <>
      <ul>
        {friendList.map((friend) => (
          <Friend
            data={friend}
            key={friend.id}
            handleSetSplitFormOpen={handleSetSplitFormOpen}
            handleSetCurrentSplitFriend={handleSetCurrentSplitFriend}
            currentSplitFriend={currentSplitFriend}
            handleSetAddFriendFormOpen={handleSetAddFriendFormOpen}
          />
        ))}
      </ul>
    </>
  );
}
