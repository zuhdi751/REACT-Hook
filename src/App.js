import React, { useEffect, useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  // how useEffect work is everytime we render this component/function, everything in useEffect will be run. This tend to be dangerous due to continuous render. we do't want to get this so we put [] after a function inside useEffect. when something inside the [], it means that this variable inside [] will triger useEffect to be run.
  useEffect(()=> {
    console.log('render')
  }, [resourceType])

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

