import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nicely edited 6 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I was changed on the feature branch!!
        </a>
      </header>
    </div>
  );
}

export default App;

// docker run -it -p 3000:3000 -v /app/node_modules -v /c/mydrive/work/tarunsuneja/learning/docker-kubernetes/04-frontend:/app -e CHOKIDAR_USEPOLLING=true 0eae46bb8d07
