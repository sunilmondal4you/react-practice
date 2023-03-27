import { useState } from "react";

function Component3() {
  let [message, setMessage] = useState("your message!");
  let messageChange = (e) => {
    let newMsg = e.target.value;
    setMessage(newMsg);
  };
  return (
    <div>
      <h1>Set Message option3</h1>
      <input
        type="text"
        value={message}
        placeholder="enter here"
        onChange={messageChange}
      />
      <div>{message}</div>
      <hr />
    </div>
  );
}

export default Component3;
