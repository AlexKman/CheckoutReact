import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Cart></Cart>
      <Header></Header>

      <ul className="items">
        <ItemsList></ItemsList>
      </ul>
    </div>
  );
}

export default App;
