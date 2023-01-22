import React from "react";

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
    <li>
      <img src={src} alt={itemName} />
    </li>
  ));
}
