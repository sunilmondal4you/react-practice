import { useState } from "react";

function Component() {
  let [message, setMessage] = useState();
  let saveMessage = () => {
    let newMessage = document.querySelector("#id1").value;
    setMessage(newMessage);
    console.log(newMessage);
  };

  return (
    <div>
      <h1>Set Message option1</h1>
      <input type="text" id="id1" placeholder="input here" />
      <input type="button" value="Save" onClick={saveMessage} />
      <div>{message}</div>
      <hr />
    </div>
  );
}

export default Component;
