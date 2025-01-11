import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { useState } from "react";

function BodyCard() {
  const [counter, setCounter] = useState(0);

  const handleClick = (value) => {
    if(value === "Increase" && counter !== 20) {
      setCounter((prev) => prev + 1);
    } else if (value === "Decrease" && counter !== 0) {
      setCounter((prev) =>  prev - 1);
    }
  };
  return (
    <div className="w-[600px] h-[600px] absolute top-1/2 left-1/2 bg-slate-950 text-white rounded-xl  transform -translate-x-1/2 -translate-y-1/2 p-[1rem] text-lg flex flex-col justify-around">
      <Section1 />
      <Section2 counter={counter}/>
      <Section3 handleClick={handleClick}/>
    </div>
  );
}

export default BodyCard;
