import { useState } from "react";
import { Stats } from "./components/Stats";
import { PackingList } from "./components/PackingList";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
  { id: 4, description: "Boots", quantity: 12, packed: false },
  { id: 5, description: "Tie", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleItemUpdate(description, quantity) {
    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: items.length + 1,
    };
    setItems(() => [...items, newItem]);
  }

  function handleItemRemove(itemId) {
    setItems(() => items.filter((item) => item.id !== itemId));
  }

  function handleItemUpdatePackedStatus(itemId, packedStatus) {
    setItems(() =>
      items.map((item) => {
        if (item.id === itemId) {
          item.packed = packedStatus;
        }
        return item;
      })
    );
  }

  function handleClearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onItemUpdate={handleItemUpdate} />
      <PackingList
        items={items}
        handleItemRemoveFunction={handleItemRemove}
        handleItemUpdatePackedStatusFunction={handleItemUpdatePackedStatus}
        handleClearListFunction={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
