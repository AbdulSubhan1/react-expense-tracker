import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpense = () => {
  const { transections } = useContext(GlobalContext);
  const amounts = transections.map((transection) => transection.amount);

  const income = amounts
    .filter((amount) => amount >= 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);

  const expense = amounts
    .filter((amount) => amount <= 0)
    .reduce((acc, amount) => (acc += amount), 0)
    .toFixed(2);
  return (
    <div>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;