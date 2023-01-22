import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import apple from "./images/apple.png";
import banana from "./images/banana.png";
import cherry from "./images/cherry.png";
import dragonfruit from "./images/dragonfruit.png";

function App() {
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

  const ItemsList = Object.entries(items).map(([itemName, { src, price }]) => (
    <li key={itemName} className="card">
      <header className="card-header" id="header">
        <span>{itemName}</span>
        <span className="card-price">£{price / 100}</span>
      </header>
      <img className="card-image" src={src} alt={itemName} />
      <button className="card-button" onClick={() => {}}>
        Add to Cart
      </button>
    </li>
  ));

  return (
    <div className="App">
      <Header></Header>
      <ul className="items">{ItemsList}</ul>
      <Cart></Cart>
    </div>
  );
}

export default App;
