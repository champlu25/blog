import { useEffect, useState } from "react";
import styled from "styled-components";
import { date } from "yup";

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=468b726ab2a907b90e99fea1f6d45f60 "
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);

  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {city},
          {` ${new Date().toLocaleString("ru", {
            day: "numeric",
            month: "long",
          })}`}
        </div>
        <div>
          {temperature} градусов, {weather}
        </div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 20px 40px;
  width: 1000px;
  font-weight: bold;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0, 0, 0) 0px 2px 17px;
`;
