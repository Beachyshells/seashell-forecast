import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        This application was coded by{" "}
        <a
          className="app-link"
          href="https://www.shecodes.io/graduates/169424-michelle-durham"
        >
          Michelle Durham
        </a>{" "}
        🐞 open sourced on{" "}
        <a
          className="app-link"
          href="https://github.com/Beachyshells/seashell-forecast"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a className="app-link" href="https://seashell-shorecast.netlify.app/">
          Netlify
        </a>{" "}
        © 2024 Weather App
      </p>
    </footer>
  );
}
