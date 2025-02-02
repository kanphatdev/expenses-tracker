import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const expenseData = [
    { id: 1, description: "2 pack of sugar", category: "groceries", amount: 50 },
    { id: 2, description: "2 pack of biscuit", category: "groceries", amount: 80 },
    { id: 3, description: "2 pack of sweet", category: "groceries", amount: 85 },
    { id: 4, description: "1 Spotify subscription", category: "entertainment", amount: 139 },
    { id: 5, description: "2 Boomplay subscriptions", category: "entertainment", amount: 450 },
  ];

  const [expense, setExpense] = useState(expenseData);
  const [backupExpense] = useState(expenseData); // Keep original data for filtering

  const deleteItem = (id) => {
    setExpense(expense.filter((item) => item.id !== id));
  };

  const filterItem = (category) => {
    if (category === "all") {
      setExpense(backupExpense); // Reset to original list
    } else {
      setExpense(backupExpense.filter((item) => item.category === category));
    }
  };

  return (
    <div className="p-20 mt-4">
      <ExpenseFilter filterItem={filterItem} />
      <ExpenseList item={expense} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
