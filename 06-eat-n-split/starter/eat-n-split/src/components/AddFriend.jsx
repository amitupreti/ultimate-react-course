import { useState } from "react";

import { Button } from "./Button";

export function AddFriend({ onAddFriend }) {
  const randomNum = Math.round(Math.random() * 10000000);

  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function onSubmitHandler(e) {
    e.preventDefault();
    if (name === "" || url === "") {
      return;
    }

    setName("");
    setUrl("https://i.pravatar.cc/48");
    onAddFriend({
      id: randomNum,
      name: name,
      image: `${url}?u=${randomNum}`,
      balance: 0,
    });
  }
  return (
    <>
      <form className="form-add-friend">
        <label htmlFor="friend-name">👫 Friend name</label>
        <input
          type="text"
          name="friend-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="friend-image">🌄 Image URL</label>
        <input
          type="text"
          name="friend-image"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button onClickHandler={onSubmitHandler}>Add</Button>
      </form>
    </>
  );
}
