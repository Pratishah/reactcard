import React from "react";
import { Button } from "antd";
import "./App.css";
import Cardfunc from "./Components/Cardfunc";
import ItemType from "./Models/ItemType";

function App() {
  const items = [
    new ItemType(
      "Learn to play",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwQ_4WDaG622jZ5R3qrM7FREuRobYcWfo_Q&usqp=CAU.png",
      "Mario"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry."
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry"
    ),
    new ItemType(
      "Delicious fruit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX30TYblQfkT6KQjErIsceWYu1ievYU1iIQ&usqp=CAU.png",
      "strawberry"
    ),
  ];

  return (
    <div className="App">
      <div>
        <h1>Practising Cards</h1>
        <Cardfunc Items={items}></Cardfunc>
      </div>
      <Button type="primary">Test</Button>
    </div>
  );
}

export default App;
