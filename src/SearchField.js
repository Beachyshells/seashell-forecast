import React from "react";

export default function SearchField(props) {
  return (
    <div className="container search-field pt-3 d-flex justify-content-center">
      <input
        className="city-input"
        type="text"
        placeholder="Enter city"
        autoFocus
        onChange={props.onCityChange}
      />
      <input className="btn" type="submit" value="Search" />
    </div>
  );
}
