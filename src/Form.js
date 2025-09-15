import React from "react";

export default function Form() {
  return (
    <form className="Form">
      <div className="search-field pt-3 d-flex justify-content-center">
        <input
          className="city-input"
          type="text"
          placeholder="Enter city"
          autoFocus
        />
        <input className="btn" type="submit" value="Search" />
      </div>
      <h3>Plattsburgh</h3>
    </form>
  );
}
