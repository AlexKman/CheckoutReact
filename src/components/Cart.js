import React from "react";
import "./Cart.css";

export default function Cart(items) {
  // Function to break down shopping cart items added and return accumulator, avoids cells added repeatedly each time
  const counts = items.cart.reduce((acc, cv) => {
    acc[cv] ? ++acc[cv] : (acc[cv] = 1);
    return acc;
  }, {});

  const cart = [...items.cart].sort();

  let startingPrice = 0;
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + items.items[curr].price;
  }, startingPrice);

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td colSpan="3">Cart</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(counts).map(([itemName, count]) => (
            <tr key={itemName}>
              <td>{itemName}</td>
              <td>{count}</td>
              <td>£{(items.items[itemName].price * count) / 100}</td>{" "}
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              Total <p id="discount">(discounts applied)</p>
            </td>
            <td>£{totalPrice / 100}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
