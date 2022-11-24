import React, { useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <div className="App-container">
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;

// Hook or useState must be run from a function, not in loop or conditional or even class. useState must be put in the top level of function, can not be nested
// always called in the exact same order.
