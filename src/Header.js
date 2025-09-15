import React from "react";
import Form from "./Form";

export default function Header() {
  return (
    <header className="Header">
      <h1>SeaShells Shorecast</h1>
      <div className="container-header">
        <h4>Your daily dose of coastal weather updates</h4>
      </div>
      <Form />
    </header>
  );
}
