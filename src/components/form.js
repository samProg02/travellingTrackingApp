import { useState } from "react";

export default function Form({ onHandleItems }) {
  const [description, setDescription] = useState("");
  const [selectNum, setSelect] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity: selectNum,
      isPacked: false,
      id: Date.now(),
    };
    console.log(newItem);
    onHandleItems(newItem);

    setDescription("");
    setSelect(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍</h3>
      <select value={selectNum} onChange={(e) => setSelect(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
