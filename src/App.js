import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import Hello from "./component/Hello";
import Component from './component/Component';
import Component2 from './component/Component2';
import Component3 from './component/Component3';


function App() {
  return (
    <>
      <Hello/>
      <Component/>
      <Component2/>
      <Component3/>
    </>
  );
}

export default App;
