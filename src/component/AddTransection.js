import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddTransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransection } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransection = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransection(newTransection);
  };
  return (
    <>
      <h3>Add Transection</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Your Text.."
          />
        </div>
        <div>
          <label htmlFor="Amount">
            Amount <br /> (Negative- Expense, Positive-Income)
          </label>
          <input
            type="number"
            name="Amount"
            placeholder="Enter Your Amount.."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button>Add Transection</button>
      </form>
    </>
  );
};

export default AddTransection;
