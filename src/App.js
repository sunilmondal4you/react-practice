import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  return (
    <>
      <Component></Component>
      <Component2></Component2>
      <Component3></Component3>
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
  let [message, setMessage] = useState()
  let saveMessage = ()=>{
    let newMessage = document.querySelector("#id1").value;
    setMessage(newMessage);
    console.log(newMessage)
  }

  return (
    <div>
      <h1>Set Message option1</h1>
      <input type="text" id="id1" placeholder="input here"/>
      <input type="button" value="Save" onClick={saveMessage}/>
      <div>{message}</div>
      <hr/>
    </div>
  );
}

function Component2(){
  let msgRef = useRef();
  let [message, setMessage] = useState();

  let saveMe = ()=>{
    let newMsg = msgRef.current.value;
    console.log(newMsg)
    setMessage(newMsg); 
  }

  return(
    <div>
      <h1>Set Message option2</h1>
      <input type="text" ref={msgRef} placeholder="Enter here"/>
      <input type="button" value="Save" onClick={saveMe}/>

      <div>{message}</div>
      <hr/>
    </div>
  );
}

function Component3 (){
  let [message, setMessage] = useState('your message!');
  let messageChange = (e)=>{
    let newMsg = e.target.value;
    setMessage(newMsg);
  };
  return(
    <div>
      <h1>Set Message option3</h1>
      <input type="text" value={message} placeholder="enter here" onChange={messageChange}/>
      <div>{message}</div>
    <hr/>
    </div>
  )
}

export default App;
