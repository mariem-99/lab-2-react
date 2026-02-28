import { useState } from 'react';

export default function TextEcho() {
  const [text, setText] = useState('');
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." style={{width: '100%'}} />
      <div className="display">
        You typed: <span>"{text}"</span><br />
        Characters: <span>{text.length}</span> | Words: <span>{wordCount}</span>
      </div>
    </div>
  );
}