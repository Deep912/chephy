import React from "react";
import Count from "./Count";
import { useState } from "react";

const Challange = () => {
  const [count, setCount] = useState(0);
  console.log("challenge ran");

  return (
    <>
      <Count number={count} setNumber={setCount} />
    </>
  );
};

export default Challange;
