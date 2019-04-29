import React from "react";
import ReactDOM from "react-dom";
import Main from "./main.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="offset-sm-4 col-sm-4">
          <div className="board">
            <h1>React Seacrh!</h1>
            <p>Here is a list of Reggae artists rendered from a JSON object</p>
          </div>
          <div>
            <h2> Search: </h2>
          </div>
          <Main />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
