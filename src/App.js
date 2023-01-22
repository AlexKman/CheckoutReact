import "./App.css";
import Header from "./components/Header";
import apple from "./images/apple.png";

function App() {
  const items = {
    A: {
      src: { apple },
      price: 50,
      special: [3, 130],
    },
  };

  return (
    <div className="App">
      <Header></Header>
      <ul id="items">{items}</ul>
    </div>
  );
}

export default App;
