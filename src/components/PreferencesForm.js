import { useState } from 'react';

export default function PreferencesForm() {
  const [username, setUsername] = useState('');
  const [color, setColor] = useState('red');
  const [subscribed, setSubscribed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [source, setSource] = useState('friend');

  return (
    <div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Favorite Color</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="form-group">
        <label><input type="checkbox" checked={subscribed} onChange={() => setSubscribed(!subscribed)} /> Subscribe to newsletter</label>
      </div>
      <div className="form-group">
        <label><input type="checkbox" checked={accepted} onChange={() => setAccepted(!accepted)} /> Accept terms</label>
      </div>
      <div className="form-group">
        <label>How did you hear about us?</label>
        <div className="radio-group">
          {['Friend', 'Google', 'Social Media', 'Other'].map(opt => (
            <label key={opt}>
              <input type="radio" value={opt.toLowerCase().replace(' ', '-')} checked={source === opt.toLowerCase().replace(' ', '-')} onChange={(e) => setSource(e.target.value)} />
              {opt}
            </label>
          ))}
        </div>
      </div>
      <div className="display">
        User: <span>{username || '—'}</span> | Color: <span>{color}</span> | Newsletter: <span>{subscribed ? 'Yes' : 'No'}</span> | Terms: <span>{accepted ? 'Yes' : 'No'}</span> | Source: <span>{source}</span>
      </div>
    </div>
  );
}