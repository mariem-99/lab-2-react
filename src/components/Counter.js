import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="display">Count: <span>{count}</span></div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button className="secondary" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}