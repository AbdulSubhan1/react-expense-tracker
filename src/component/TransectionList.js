import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transection from "./Transection";

const TransectionList = () => {
  const { transections } = useContext(GlobalContext);

  return (
    <>
      <h4>History</h4>
      <ul>
        {transections.length >= 0 ? (
          transections.map((transection) => (
            <Transection key={transection.id} transection={transection} />
          ))
        ) : (
          <p>No Transections Yet</p>
        )}
      </ul>
    </>
  );
};

export default TransectionList;
