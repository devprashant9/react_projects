import React from "react";
import Button from "./Button";

function Section3({ handleClick }) {
  return (
    <>
      <Button text="Increase" handleClick={handleClick} />
      <Button text="Decrease" handleClick={handleClick} />
    </>
  );
}

export default Section3;
