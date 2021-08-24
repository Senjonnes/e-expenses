import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (e, type) => {
    if (e && type === "title")
      setData((prev) => {
        return { ...prev, title: e.target.value };
      });

    if (e && type === "amount")
      setData((prev) => {
        return { ...prev, amount: e.target.value };
      });

    if (e && type === "date")
      setData((prev) => {
        return { ...prev, date: e.target.value };
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.date = new Date(data.date);
    data.amount = +data.amount;
    console.log(data);
    setData({ title: "", amount: "", date: "" });
    props.handleSubmit(data);
  };

  const closeExpenseForm = () => {
    setData({ title: "", amount: "", date: "" });
    props.closeExpenseForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange(e, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={data.amount}
            min="0.01"
            step="0.01"
            onChange={(e) => handleChange(e, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={data.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => handleChange(e, "date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={closeExpenseForm} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
