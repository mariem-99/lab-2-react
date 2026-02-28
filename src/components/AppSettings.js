import { useState } from 'react';

export default function AppSettings() {
  const [settings, setSettings] = useState({ theme: 'light', fontSize: 'medium', soundEnabled: true });

  const toggleTheme = () => setSettings({ ...settings, theme: settings.theme === 'light' ? 'dark' : 'light' });
  const changeFontSize = () => {
    const sizes = ['small', 'medium', 'large'];
    const next = (sizes.indexOf(settings.fontSize) + 1) % sizes.length;
    setSettings({ ...settings, fontSize: sizes[next] });
  };
  const toggleSound = () => setSettings({ ...settings, soundEnabled: !settings.soundEnabled });

  return (
    <div>
      <div className="display">
        Theme: <span>{settings.theme}</span> | Font: <span>{settings.fontSize}</span> | Sound: <span>{settings.soundEnabled ? 'On' : 'Off'}</span>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={changeFontSize}>Change Font Size</button>
      <button className="secondary" onClick={toggleSound}>Toggle Sound</button>
    </div>
  );
}