import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);
  const handleSubmit = (data) => {
    console.log(data);
    data.id = Date.now() + "";
    props.addExpense(data);
    setIsEditting(false);
  };

  const closeExpenseForm = () => {
    setIsEditting(false);
  };

  const showExpenseForm = () => {
    setIsEditting(true);
  };

  return (
    <div className="new-expense">
      {isEditting ? (
        <ExpenseForm
          closeExpenseForm={closeExpenseForm}
          handleSubmit={handleSubmit}
        />
      ) : (
        <button onClick={showExpenseForm} type="button">
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
