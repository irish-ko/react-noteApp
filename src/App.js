import React, { useState } from "react";

export default function App() {
  const [state, changeState] = useState(1);

  return (
    <div className="App">
      <h1>{state}</h1>

      <button onClick={() => changeState(state + 1)}>PRESS</button>
    </div>
  );
}
