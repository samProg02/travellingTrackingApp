import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packing_list";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleItems={handleAddItems} />
      <PackingList
        item={items}
        onclear={handleClear}
        onDeleteItem={handleDeleteItems}
        onToggleItem={toggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
