import { useState } from "react";
import "./App.css";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button
      className="text-3xl border border-gray-400 m-1 leading-9 w-12 h-12"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className="flex">
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}
