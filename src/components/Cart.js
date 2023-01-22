import React from "react";
import "./Cart.css";

export default function Cart(items) {
  const counts = items.cart;

  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <td colSpan="3">Items</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(counts).map(([itemName, count]) => (
            <tr key={itemName}>
              <td>{itemName}</td>
              <td>{count}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              Total <p id="discount">(discounts applied)</p>
            </td>
            <td>Total Price</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
