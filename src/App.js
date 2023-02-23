import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import ExpenseForm from "./component/ExpenseForm";
import ExpensesList from "./component/ExpensesList";
import { v4 as uuid } from "uuid";

// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car", amount: 400 },
//   { id: uuid(), charge: "credit card bill", amount: 1200 },
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  /*****************     state value     ********************** */
  //expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  //expenseID
  const [id, setId] = useState(0);
  //single expense
  const [charge, setCharge] = useState("");
  //single amount
  const [amount, setAmount] = useState("");
  //alert
  const [alert, setAlert] = useState({ show: false });
  //edit
  const [edit, setEdit] = useState(false);

  /* ****************     useEffect   **********************/
  useEffect(() => {
    console.log("we call useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  /* ****************     functionality   **********************/
  // handle single charge
  const handleCharge = (e) => {
    //get value from input field and set into state value
    setCharge(e.target.value);
  };
  // handle single amount
  const handleAmount = (e) => {
    //get value from input field and set into state value
    setAmount(e.target.value);
  };

  //handle custom alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  //clear all expense
  const handleAllExpense = () => {
    console.log(expenses);
    setExpenses([]);
  };

  // handle delete
  const handleDelete = (id) => {
    const tempExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    setExpenses(tempExpenses);
  };

  // handle edit
  const handleEdit = (id) => {
    console.log(id);
    const tempExpense = expenses.find((expense) => expense.id === id);
    const { charge, amount } = tempExpense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  };

  //handle form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        const tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });

        setExpenses(tempExpenses);
        setEdit(false);
        setId(0);
        handleAlert({
          type: "success",
          text: `Your ${charge} expense changed`,
        });
      } else {
        let singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: `Your ${charge} expense added` });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `Charge can't be empty value and amount value has to bigger than zero`,
      });
    }

    //setExpenses([...expenses, singleExpense]);
    //handleAlert({ type: "success", text: "Item added" });
  };
  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          edit={edit}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpensesList
          expenses={expenses}
          handleAllExpense={handleAllExpense}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
      {expenses.length > 0 && (
        <h1>
          Total Spending :$
          <span className="total">
            {expenses.reduce((acc, crr) => {
              return acc + parseInt(crr.amount);
            }, 0)}
          </span>
        </h1>
      )}
    </div>
  );
}

export default App;
