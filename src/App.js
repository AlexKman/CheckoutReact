import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ul className="items">
        <ItemsList></ItemsList>
      </ul>
    </div>
  );
}

export default App;
