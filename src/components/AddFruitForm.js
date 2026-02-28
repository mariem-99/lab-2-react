import { useState } from 'react';

export default function AddFruitForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) { onAdd(input); setInput(''); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a fruit..." />
      <button type="submit">Add</button>
    </form>
  );
}