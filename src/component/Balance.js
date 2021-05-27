import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Balance = () => {
  const { transections } = useContext(GlobalContext);
  const amount = transections.map((transection) => transection.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Balance:</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
