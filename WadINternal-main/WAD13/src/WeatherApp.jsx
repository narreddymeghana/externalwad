import { useState } from "react";
import { getCurrentWeather, getForecastWeather } from "./services/weatherService";
import WeatherChart from "./components/WeatherChart";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      alert("Enter city name");
      return;
    }

    try {
      const currentData = await getCurrentWeather(city);
      setCurrent(currentData);

      const forecastData = await getForecastWeather(city);
      setForecast(forecastData);
    } catch (error) {
      console.log(error);
      alert("Error fetching weather");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Weather Dashboard</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {current && current.main && (
        <div>
          <h3>{current.name}</h3>
          <p>Temperature: {current.main.temp} °C</p>
          <p>Condition: {current.weather[0].description}</p>
        </div>
      )}

      <WeatherChart data={forecast} />
    </div>
  );
}

export default WeatherApp;