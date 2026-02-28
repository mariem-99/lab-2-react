import { useState } from 'react';

export default function Calculator() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <div className="display">Result: <span>{num}</span></div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <button onClick={() => setNum(num - 1)}>-1</button>
      <button onClick={() => setNum(num * 2)}>×2</button>
      <button onClick={() => setNum(num / 2)}>÷2</button>
      <button className="secondary" onClick={() => setNum(0)}>Reset</button>
    </div>
  );
}