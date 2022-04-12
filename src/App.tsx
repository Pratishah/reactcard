import React, { useState } from "react";
import { Button } from "antd";
import "./App.css";
import Cardfunc from "./Components/Cardfunc";
import ItemType from "./Models/ItemType";

function App() {
  const [backgroundcolor, setbgcolor] = useState("white");

  const bgcolor = (color: string) => {
    console.log("before ", backgroundcolor);
    setbgcolor(color);
    console.log("after ", backgroundcolor);
  };
  const items = [
    new ItemType(
      "Learn to play",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwQ_4WDaG622jZ5R3qrM7FREuRobYcWfo_Q&usqp=CAU.png",
      "Mario",
      "yellow"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry",
      "green"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry.",
      "aqua"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry",
      "red"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry",
      "pink"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry",
      "white"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry",
      "black"
    ),
  ];

  return (
    <div style={{ backgroundColor: backgroundcolor }}>
      <h1 className={"head"}>Practising Cards</h1>
      <div className="flexstyle">
        {items.map((item) => (
          <Cardfunc item={item} bgcolor={bgcolor}></Cardfunc>
        ))}
      </div>
    </div>
  );
}

export default App;
