import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Transection = ({ transection }) => {
  const { deleteTransection } = useContext(GlobalContext);

  const sign = transection.amount > 0 ? "+" : "-";
  return (
    <li>
      {transection.text}{" "}
      <span>
        {sign}${Math.abs(transection.amount)}
      </span>
      <button onClick={() => deleteTransection(transection.id)}>x</button>
    </li>
  );
};
export default Transection;
