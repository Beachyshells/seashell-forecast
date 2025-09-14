import React from "react";

export default function Form() {
  return (
    <form className="Form">
      <input className="city-input" type="text" placeholder="Enter city" />
      <input className="btn" type="button" value="Search" />
    </form>
  );
}
