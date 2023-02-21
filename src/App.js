import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import ExpenseForm from "./component/ExpenseForm";
import ExpensesList from "./component/ExpensesList";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <div>
      <Alert type={"success"} text={"item added"} />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpensesList expenses={expenses} />
      </main>
      <h1>
        Total Spending :$
        <span className="total">
          {expenses.reduce((acc, crr) => {
            return acc + parseInt(crr.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
