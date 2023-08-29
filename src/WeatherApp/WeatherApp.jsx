import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
const WeatherApp = () => {
  const [inputValue, setInputValue] = useState("Narayanganj");
  const [weatherInfos, setWeatherInfos] = useState({});

  const getWeatherInfo = async () => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=51c1b9373eaf6c25c3152773a88b8c25`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      const { country, sunset } = data.sys;
      const { pressure, humidity, temp, temp_max, temp_min } = data.main;
      const { main: weatherCondition } = data.weather[0];
      const { name: cityName } = data;
      const { speed } = data.wind;

      const infos = {
        country,
        cityName,
        sunset,
        pressure,
        humidity,
        temp,
        temp_min,
        temp_max,
        speed,
        weatherCondition,
      };
      setWeatherInfos(infos);
    } catch (error) {
      alert("unavailable we are sorry the trouble");
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <main className="min-h-screen w-full flex items-center justify-center flex-column">
        <div className="flex w-400 flex-column rounded-md">
          <div className="flex mb-5">
            <input
              className="h-12 w-100 px-3 rounded-l-sm text-md bg-slate-100"
              value={inputValue}
              placeholder="Search by city name"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={getWeatherInfo}
              className="h-12 w-auto px-4 rounded-sm bg-black text-white text-md"
            >
              Search
            </button>
          </div>
          <WeatherCard infos={weatherInfos} />
        </div>
      </main>
    </>
  );
};
export default WeatherApp;
