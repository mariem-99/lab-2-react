import { useState } from 'react';
import TemperatureDisplay from './TemperatureDisplay';
import TemperatureControl from './TemperatureControl';

export default function Thermostat() {
  const [temperature, setTemperature] = useState(20);
  return (
    <div>
      <TemperatureDisplay temp={temperature} />
      <TemperatureControl
        onIncrease={() => setTemperature(temperature + 1)}
        onDecrease={() => setTemperature(temperature - 1)}
      />
    </div>
  );
}