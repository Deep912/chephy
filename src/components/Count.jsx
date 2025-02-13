import React, { useState } from "react";

const Count = ({ number, setNumber }) => {
  const handlePlus = () => {
    setNumber((prev) => ++prev);
  };
  const handleMinus = () => {
    setNumber((prev) => --prev);
  };
  console.log("count ran");
  return (
    <>
      <button onClick={handlePlus}> + </button>
      {number}
      <button onClick={handleMinus}> - </button>
    </>
  );
};

export default Count;
