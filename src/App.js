import React, { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [state, changeState] = useState(1);
  const [value, changeVal] = useState("Write text");

  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => changeVal(e.target.value)}
      />
      <hr />

      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
