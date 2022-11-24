import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4)

  function decrementCount () {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount () {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="App-container">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;

// Hook or useState must be run from a function, not in loop or conditional or even class. useState must be put in the top level of function, can not be nested
// always called in the exact same order.
