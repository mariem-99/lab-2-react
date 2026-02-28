import { useState } from 'react';
import AddFruitForm from './AddFruitForm';
import FruitList from './FruitList';

export default function FruitBasket() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange']);

  const handleAdd = (fruit) => setFruits([...fruits, fruit]);
  const handleDelete = (index) => setFruits(fruits.filter((_, i) => i !== index));

  return (
    <div>
      <AddFruitForm onAdd={handleAdd} />
      <FruitList fruits={fruits} onDelete={handleDelete} />
      <div className="display">Total items: <span>{fruits.length}</span></div>
    </div>
  );
}