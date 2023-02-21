import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
    </>
  );
};

export default ExpensesList;
