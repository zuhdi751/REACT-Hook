import React, { useEffect, useState } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  // everytime we click a button, 'render' is in console, but if we click post button we can't get 'render' is consoled even though we clicked it again and again(more than once). this is strange. it used to be consoled 'render' everytime post button is clicked. I can show this by change the text

  // this is because function inside the useEffect will be run if only resourceType is change. when we click post button twice, resourceType is not changed. so thats why.

  // explore it further by removing resourceType inside []
  // when [] is empty, those callback function('unmount') doesn't work because empty array never actually changes between different renders.
  console.log("render");

  useEffect(() => {
    console.log("unmount");
  }, []);

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
