const API_KEY = "bd34cc3a527eb9d9b67980cfcb1f2123"; // 🔴 Replace with your OpenWeatherMap API key

export const getCurrentWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.json();
};

export const getForecastWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.json();
};