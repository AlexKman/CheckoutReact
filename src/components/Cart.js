import React from "react";
import "./Cart.css";

export default function Cart(items) {
  // Function to break down shopping cart items added and return accumulator, avoids cells added repeatedly each time
  const counts = items.cart.reduce((acc, cv) => {
    acc[cv] ? ++acc[cv] : (acc[cv] = 1);
    return acc;
  }, {});

  const discountMap = {};

  Object.entries(items.items).forEach(([itemName, { special }]) => {
    if (special && counts[itemName] >= special[0]) {
      const discounts = Math.floor(counts[itemName] / special[0]);
      discountMap[itemName] = {
        itemsDiscounted: discounts * special[0],
        discountedPrice: special[1] * discounts,
      };
    }
  });

  const cart = [...items.cart].sort();

  let startingPrice = 0;

  Object.entries(discountMap).forEach(
    ([itemName, { itemsDiscounted, discountedPrice }]) => {
      const index = cart.indexOf(itemName);
      cart.splice(index, itemsDiscounted);
      startingPrice += discountedPrice;
    }
  );

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
