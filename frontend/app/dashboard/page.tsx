import { useState, useEffect } from "react";
import Nav from "@/components/Navbar";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";
import { GLOBAL_VARIABLE_SATISFIED, GLOBAL_VARIABLE_NOT_SATISFIED } from "@/../config";

export default function Dashboard() {
  const mappedArray1 = GLOBAL_VARIABLE_SATISFIED.map((innerArray, index) => {
    const userString = `User ${index + 1}`;
    return {
      user: userString,
      innerArray: innerArray
    };
  });

  const mappedArray2 = GLOBAL_VARIABLE_NOT_SATISFIED.map((innerArray, index) => {
    const userString = `User ${index + 1}`;
    return {
      user: userString,
      innerArray: innerArray
    };
  });

  console.log(mappedArray1);
  console.log(mappedArray2);

  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card mappedArray1={mappedArray1} />
        <Card2 mappedArray2={mappedArray2} />
      </div>
    </div>
  );
}
