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

    gsap.set([...background.children, person, bulb, light], {autoAlpha: 0});
    gsap.set(bulb, {transformOrigin: '58% 100%'});
    gsap.set(light, {transformOrigin: '75% 45%'});

    const timeLine = gsap.timeline({defaults: {ease: 'power3.inOut'}});

    timeLine.fromTo(person, {x: '-=600'}, {duration:2, x: '+=600', autoAlpha: 1})
        .fromTo(bulb, {scaleY: 0}, {duration: 0.3, autoAlpha: 1, scaleY:1})
        .fromTo(light, {scale: .85}, {duration: 1, scale: 1, autoAlpha: 1}, '-=.25')
        .to(background.children, {duration: 3, autoAlpha:1, stagger: 0.3})
  }, []);

  return (
    <div ref={wrapper} className="App">
      <Idea />
    </div>
  );
}

export default App;
