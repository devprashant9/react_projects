import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    console.log(`Re-Rendered: ${counter}`); // Always Logs Current Value Because Component is Re-Rendered

    const handleClick = () => {
        // setCounter(counter + 1); // Not a Good Way To Update
        setCounter((prev) => prev + 1); // Perfect Way to Update When Current Value is Dependent on Previous Value
        console.log(counter); // logs previous value. Component is Not Yet Re-Rendered

        // // Un Comment for Result (Line 12 - 15)
        // // Works Only Once
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);

        // // Un Comment For Result (Line 18 -21)
        // // Works Each Time
        // setCounter((prev) => prev + 1);
        // setCounter((prev) => prev + 1);
        // setCounter((prev) => prev + 1);
    };

  return (
    <div className="w-[300px] h-[300px] bg-red-400 rounded-lg p-4 text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center" >
        <button className="p-2 m-2 bg-slate-950 text-white text-lg rounded-md">Current Value: {counter}</button>
        <button className="p-2 m-2 bg-slate-950 text-white text-lg rounded-md" onClick={handleClick}>Increase Value: +1</button>
    </div>
  );
}

export default Counter;
