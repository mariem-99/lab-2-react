export default function TemperatureControl({ onIncrease, onDecrease }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={onIncrease}>+1°</button>
      <button className="secondary" onClick={onDecrease}>-1°</button>
    </div>
  );
}