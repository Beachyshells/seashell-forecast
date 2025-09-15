import React, { useState } from "react";
import SearchField from "./SearchField";
import CurrentWeather from "./CurrentWeather";

export default function Form() {
  const [city, setCity] = useState("");
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let apiKey = "001bc651977f4b024af4d84282b0f02a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    alert(`Searching weather for ${city}`);
  }
  return (
    <form className="Form" onSubmit={handleFormSubmit}>
      <SearchField onCityChange={handleCityChange} />
      <h3>{city}</h3>
      <CurrentWeather />
    </form>
  );
}
