import { useRef, useState } from "react";

function Component2() {
  let msgRef = useRef();
  let [message, setMessage] = useState();

  let saveMe = () => {
    let newMsg = msgRef.current.value;
    console.log(newMsg);
    setMessage(newMsg);
  };

  return (
    <div>
      <h1>Set Message option2</h1>
      <input type="text" ref={msgRef} placeholder="Enter here" />
      <input type="button" value="Save" onClick={saveMe} />

      <div>{message}</div>
      <hr />
    </div>
  );
}

export default Component2;
