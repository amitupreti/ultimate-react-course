import { useState } from "react";

export function Item({
  item,
  handleItemRemoveFunction,
  handleItemUpdatePackedStatusFunction,
}) {
  const [packed, setPacked] = useState(false);

  function handleRemove() {
    handleItemRemoveFunction(item.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        onChange={(e) => {
          setPacked(e.target.checked);
          handleItemUpdatePackedStatusFunction(item.id, e.target.checked);
        }}
        name={item.id}
        id={item.id}
      />
      <span className={packed ? "strike" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleRemove}>❌</button>
    </li>
  );
}
