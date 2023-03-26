import logo from "./logo.svg";
import "./App.css";

function App() {
  let title = "Hello World!";
  let textId = "title";
  return (
    <div>
      <h1 id={textId}>{title}</h1>
    </div>
  );
}

export default App;
