import React, { useRef, useEffect } from "react";
import "./App.css";
import { ReactComponent as Idea } from "./idea.svg";
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const background = elements.getElementById("background");
    const person = elements.getElementById("person");
    const bulb = elements.getElementById("bulb");
    const light = elements.getElementById("Vector_35");
  });

  return (
    <div ref={wrapper} className="App">
      <Idea />
    </div>
  );
}

export default App;
