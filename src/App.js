import "./App.css";
import Header from "./components/Header";
import apple from "./images/apple.png";

function App() {
  const items = {
    A: {
      src: apple,
      price: 50,
      special: [3, 130],
    },
  };

  const ItemsList = Object.entries(items).map(([itemName, { src, price }]) => (
    <li>
      <img src={src} alt={itemName} />
    </li>
  ));

  return (
    <div className="App">
      <Header></Header>
      <ul id="items">{ItemsList}</ul>
    </div>
  );
}

export default App;
