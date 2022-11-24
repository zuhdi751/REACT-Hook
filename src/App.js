import React from "react";
import "./App.css";
import CounterHook from "./Components/CounterHook";
import CounterState from "./Components/CounterStatefull";

function App() {
  return (
    <div className="App-container">
      <CounterHook />
      <CounterState />
    </div>
  );
}

export default App;

// Hook or useState must be run from a function, not in loop or conditional or even class. useState must be put in the top level of function, can not be nested
// always called in the exact same order.
