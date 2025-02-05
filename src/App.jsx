import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [expense, setExpense] = useState([]); // Start with an empty array
  const [backupExpense, setBackupExpense] = useState([]); // Keep backup empty too

  const deleteItem = (id) => {
    const updatedExpenses = expense.filter((item) => item.id !== id);
    setExpense(updatedExpenses);
    setBackupExpense(updatedExpenses);
  };

  const filterItem = (category) => {
    if (category === "all") {
      setExpense(backupExpense);
    } else {
      setExpense(backupExpense.filter((item) => item.category === category));
    }
  };

  const addExpense = (newExpense) => {
    const expenseWithId = { id: Date.now(), ...newExpense };
    const updatedExpenses = [...expense, expenseWithId];
    setExpense(updatedExpenses);
    setBackupExpense(updatedExpenses);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-6">
        Expense Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExpenseForm onSubmit={addExpense} />
        <ExpenseFilter filterItem={filterItem} />
      </div>

      <ExpenseList item={expense} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
