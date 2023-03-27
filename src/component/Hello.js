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

export default Hello;
