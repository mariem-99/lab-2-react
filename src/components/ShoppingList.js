import { useState } from 'react';

const extras = ['Butter', 'Juice', 'Cheese', 'Apples', 'Yogurt'];

export default function ShoppingList() {
  const [items, setItems] = useState(['Milk', 'Bread', 'Eggs']);

  const addItem = () => {
    const random = extras[Math.floor(Math.random() * extras.length)];
    setItems([...items, random]);
  };

  const removeItem = () => setItems(items.slice(0, -1));

  return (
    <div>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add Random Item</button>
      <button className="danger" onClick={removeItem}>Remove Last</button>
    </div>
  );
}