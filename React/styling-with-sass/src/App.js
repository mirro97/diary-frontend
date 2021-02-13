import React from "react";
import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="lime" size="large">
          BUTTON
        </Button>
        <Button color="lime">BUTTON</Button>
        <Button color="lime" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button color="yellow" size="large">
          BUTTON
        </Button>
        <Button color="yellow">BUTTON</Button>
        <Button color="yellow" size="small">
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="lime" outline>
          BUTTON
        </Button>
        <Button color="yellow" size="small" outline>
          BUTTON
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth className="customized-button">
          BUTTON
        </Button>
        <Button
          color="lime"
          size="large"
          fullWidth
          onClick={() => {
            console.log("클릭!");
          }}
        >
          BUTTON
        </Button>
        <Button
          color="yellow"
          size="large"
          fullWidth
          onMouseMove={() => {
            console.log("마우스 무브!");
          }}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
