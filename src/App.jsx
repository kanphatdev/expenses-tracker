import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expense, setExpense] = useState([
    {
      id: 1,
      description: "2 pack of sugar",
      category: "groceries",
      amount: 50,
    },
    {
      id: 2,
      description: "2 pack of biscuit",
      category: "groceries",
      amount: 80,
    },
    {
      id: 3,
      description: "2 pack of sweet",
      category: "groceries",
      amount: 85,
    },
    {
      id: 4,
      description: "1 spotify subcription",
      category: "entertainment",
      amount: 139,
    },
    {
      id: 5,
      description: "2 boomplay subcription",
      category: "entertainment",
      amount: 450,
    },
  ]);
  return (
    <div className="p-20">
      <ExpenseList item={expense} />
    </div>
  );
};
export default App;
