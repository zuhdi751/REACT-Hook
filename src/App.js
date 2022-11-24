import React, { useEffect, useState } from "react";

// we will modivy a variable based on the width of the window
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up (stoping update position o windows especially when window is still remain unchanged)

    // Try! using return in other useEffect calback function
    // this is known as clean up function
    // clean up function runs before the component is removed from the UI to prevent memory leaks

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
}

export default App;
