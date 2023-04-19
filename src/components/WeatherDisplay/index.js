import "./WeatherDisplay.css";

export default function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <div className="weather-display__stats">
        <div className="weather-display__condition">{weather.condition}</div>
        <div className="weather-display__temperature">
          {weather.temperature} °C
        </div>
      </div>
      <h3 className="weather-display__message">
        {weather.isGoodWeather
          ? "The weather is awesome! Go outside and..."
          : "Bad weather outside! Here's what you can do now:"}
      </h3>
    </div>
  );
}
