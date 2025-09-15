import React from "react";

export default function CurrentWeather() {
  return (
    <div className="container CurrentWeather">
      <div className="row current-weather mt-3">
        <div className="col-md-3">
          <img
            src="/images/3375691_cloudy_emoticon_happy_smiley_sun_icon.png"
            className="img-fluid weather-icon"
            alt="Clear sky"
          />
        </div>
        <div className="col-md-3  temperature">
          <span className="temperature-value">72°</span>
          <span className="units">F|C</span>
        </div>

        <div className="col-md-6 weather-details-container">
          <div className="weather-details row-md-4">Humidity: 50%</div>
          <div className="weather-details row-md-4">Wind: 5 mph</div>
          <div className="weather-details row-md-4">Description: Clear sky</div>
        </div>
      </div>
    </div>
  );
}
