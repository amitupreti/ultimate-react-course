import { useState } from "react";
import { Item } from "./Items";

export function PackingList({
  items,
  handleItemRemoveFunction,
  handleItemUpdatePackedStatusFunction,
  handleClearListFunction,
}) {
  const [sortBy, setSortBy] = useState("id");

  let sortedItems = items;

  if (sortBy === "id") sortedItems = items;
  else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleItemRemoveFunction={handleItemRemoveFunction}
            handleItemUpdatePackedStatusFunction={
              handleItemUpdatePackedStatusFunction
            }
          />
        ))}
      </ul>

      <div className="actions">
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="id">Sort by Input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to clear the list?")) {
              handleClearListFunction();
            }
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
