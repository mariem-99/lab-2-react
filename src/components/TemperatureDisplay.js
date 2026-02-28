export default function TemperatureDisplay({ temp }) {
  const message = temp < 15 ? "🥶 It's cold!" : temp > 25 ? "🔥 It's warm!" : "😊 It's comfortable";
  return (
    <div>
      <div className="temp-display">{temp}°C</div>
      <p className="temp-message">{message}</p>
    </div>
  );
}