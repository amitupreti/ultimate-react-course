import { useState } from "react";

export function Form({ onItemUpdate }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    onItemUpdate(description, quantity);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        name="select-stuff"
        id="stuff"
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((index) => (
          <option value={index} key={index}>
            {index}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items.........."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
