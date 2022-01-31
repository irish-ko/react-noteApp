import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>PLUS</button>
      <button onClick={() => setCount(count - 1)}>MINUS</button>
    </div>
  );
};

export default Counter;
