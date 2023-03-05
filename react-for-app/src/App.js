import { useState, useEffect } from "react";
function App() {
  const [state, setstate] = useState(0);
  const onClick = () => setstate((prev) => prev + 1);

  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the API")
  }, []);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
