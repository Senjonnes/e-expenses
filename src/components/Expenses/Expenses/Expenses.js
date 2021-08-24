import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");

  const handleFilter = (year) => {
    setFilter(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} handleFilter={handleFilter} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
