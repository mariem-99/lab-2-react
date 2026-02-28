import { useState } from 'react';

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <div className="display">You've clicked <span>{clicks}</span> times</div>
      <button onClick={() => setClicks(clicks + 1)}>Click Me!</button>
      <button className="secondary" onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}