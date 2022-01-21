import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import "./style/App.css";

export default function App() {
  const [value, changeVal] = useState("Write text");

  return (
    <div className="App">
      {/* <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => changeVal(e.target.value)}
      />
      <hr />
      <ClassCounter/>
      <ClassCounter/>
      <ClassCounter/>
      <hr />

      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div className="">Javascript - programming languages!</div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
