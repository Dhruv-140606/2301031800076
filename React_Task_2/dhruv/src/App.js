import React from "react";
import "./App.css";
import Navbar from "./navbar";

export default function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2 className="m-5">Counter: {count}</h2>
      <button onClick={increment} className="bg-gray-200 m-5 p-2 rounded">
        Increment
      </button>
      <button onClick={decrement} className="bg-gray-200 m-5 p-2 rounded">
        Decrement
      </button>
      <button onClick={reset} className="bg-gray-200 m-5 p-2 rounded">
        Reset
      </button>
    </div>
  );
}
