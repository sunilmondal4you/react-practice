import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Hello></Hello>
      <Component></Component>
    </>
  );
}

function Hello() {
  let title = "Hello World form hello";
  let textId = "title";
  let saveBtn = "Save Me";
  let saveMe = () => {
    alert("save button clicked!");
  };
  return (
    <div>
      <h1 id={textId}>{title}</h1>
      <button type="button" onClick={saveMe}>
        {saveBtn}
      </button>
    </div>
  );
}

function Component() {
  return <div>Another Component</div>;
}

export default App;
