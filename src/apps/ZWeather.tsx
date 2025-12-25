import React from 'react';
import type { WeatherProps } from '../types';

const ZWeather: React.FC<WeatherProps> = ({ className, location = 'San Francisco', units = 'imperial' }) => {
  // Demo weather data
  const weather = {
    temp: units === 'imperial' ? 68 : 20,
    condition: 'Partly Cloudy',
    humidity: 65,
    wind: units === 'imperial' ? 12 : 19,
    high: units === 'imperial' ? 72 : 22,
    low: units === 'imperial' ? 58 : 14,
    forecast: [
      { day: 'Mon', temp: units === 'imperial' ? 70 : 21, icon: '☀️' },
      { day: 'Tue', temp: units === 'imperial' ? 68 : 20, icon: '⛅' },
      { day: 'Wed', temp: units === 'imperial' ? 65 : 18, icon: '🌧️' },
      { day: 'Thu', temp: units === 'imperial' ? 67 : 19, icon: '⛅' },
      { day: 'Fri', temp: units === 'imperial' ? 71 : 22, icon: '☀️' },
    ]
  };

  const unitSymbol = units === 'imperial' ? '°F' : '°C';
  const windUnit = units === 'imperial' ? 'mph' : 'km/h';

  return (
    <div className={`flex flex-col h-full bg-gradient-to-b from-blue-400 to-blue-600 text-white ${className || ''}`}>
      {/* Main weather */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-lg font-medium mb-2">{location}</div>
        <div className="text-6xl mb-2">⛅</div>
        <div className="text-6xl font-light">{weather.temp}{unitSymbol}</div>
        <div className="text-lg mt-2">{weather.condition}</div>
        <div className="flex gap-4 mt-4 text-sm">
          <span>H: {weather.high}°</span>
          <span>L: {weather.low}°</span>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-white/10">
        <div className="text-center">
          <div className="text-sm opacity-70">Humidity</div>
          <div className="text-xl">{weather.humidity}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm opacity-70">Wind</div>
          <div className="text-xl">{weather.wind} {windUnit}</div>
        </div>
      </div>

      {/* Forecast */}
      <div className="flex justify-around p-4 bg-white/10 border-t border-white/20">
        {weather.forecast.map(day => (
          <div key={day.day} className="text-center">
            <div className="text-sm">{day.day}</div>
            <div className="text-2xl my-1">{day.icon}</div>
            <div className="text-sm">{day.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZWeather;
