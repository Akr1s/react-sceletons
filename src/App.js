import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Sceletons</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
