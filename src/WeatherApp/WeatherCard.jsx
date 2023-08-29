import { useState, useEffect } from "react";

const WeatherCard = (props) => {
  const [weatherIcon, setWeatherIcon] = useState();

  const {
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
  } = props.infos;
  useEffect(() => {
    if (weatherCondition) {
      switch (weatherCondition) {
        case "Clouds":
          setWeatherIcon("uil uil-clouds");
          break;
        case "Haze":
          setWeatherIcon("uil uil-windy");
          break;
        case "Rain":
          setWeatherIcon("uil uil-cloud-showers");
          break;
        case "Clear":
          setWeatherIcon("uil uil-sun");
          break;
        default:
          setWeatherIcon("uil uil-sun");
          break;
      }
    }
  }, [weatherCondition]);

  const date = new Date(sunset * 1000);
  const time = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="w-100 p-3 bg-slate-100">
        <div className="flex py-5 items-center justify-between">
          <div className="flex items-center gap-2 pl-5">
            <i className={`${weatherIcon} text-5xl`}></i>
            <h1 className="text-4xl font-mediam">
              {temp}
              <sup className="font-mediam">o</sup>
            </h1>
          </div>
          <div className="">
            <h1 className="weather uppercase text-3xl font-bold tracking-wider">
              {weatherCondition}
            </h1>
            <h2 className="location capitalize text-md">
              {cityName}, {country}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-100 grid grid-cols-4 px-2 py-4 bg-slate-100 border-t-2">
        <div className="sunset border-r-2 pr-2 flex items-center justify-between">
          <i className="uil uil-sunset text-2xl"></i>
          <div>
            <small className="time capitalize text-">{time}</small>
            <br />
            <small className="event capitalize text-">sunset</small>
          </div>
        </div>
        <div className="wind border-r-2 px-2 flex items-center justify-">
          <i className="uil uil-wind text-2xl pr-3"></i>
          <div>
            <small className="time capitalize">{speed}</small>
            <br />
            <small className="event capitalize">Speed</small>
          </div>
        </div>
        <div className="humidity border-r-2 pr-2 flex items-center justify-between">
          <i className="uil uil-temperature-half text-2xl"></i>
          <div>
            <small className="time capitalize">{humidity}</small> <br />
            <small className="event capitalize">humidity</small>
          </div>
        </div>
        <div className="pressure border-r pl-2 flex items-center justify-between">
          <i className="uil uil-windy text-2xl"></i>
          <div>
            <small className="time capitalize">{pressure}</small>
            <br />
            <small className="event capitalize">pressure</small>
          </div>
        </div>
      </div>
    </>
  );
};
export default WeatherCard;
