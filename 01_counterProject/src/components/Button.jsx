import React from "react";

function Button({ text, handleClick }) {
  return (
    <>
      <button
        className="bg-red-400 p-2 rounded-md text-black hover:bg-black hover:text-white hover:scale-95 transition-all"
        onClick={() => {
          handleClick(text);
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
