import React from "react";
import "./itemsList.css";
import apple from "../images/apple.png";
import banana from "../images/banana.png";
import cherry from "../images/cherry.png";
import dragonfruit from "../images/dragonfruit.png";

const items = {
  A: {
    src: apple,
    price: 50,
    special: [3, 130],
  },
  B: {
    src: banana,
    price: 30,
    special: [2, 45],
  },
  C: {
    src: cherry,
    price: 20,
  },
  D: {
    src: dragonfruit,
    price: 15,
  },
};

export default function ItemsList() {
  return Object.entries(items).map(([itemName, { src, price }]) => (
    <li key={itemName} className="card">
      <header className="card-header" id="header">
        <span>{itemName}</span>
        <span className="price">£{price / 100}</span>
      </header>
      <img className="card-image" src={src} alt={itemName} />
    </li>
  ));
}
