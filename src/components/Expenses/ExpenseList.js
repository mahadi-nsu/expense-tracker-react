import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ items }) {
  let expensesContent = "<h2> No expense found </h2>";

  if (items.length > 0) {
    expensesContent = items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div>{expensesContent}</div>;
}

export default ExpenseList;
