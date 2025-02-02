const ExpenseFilter = ({ filterItem }) => {
    return (
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => filterItem(e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="groceries">Groceries</option>
        <option value="entertainment">Entertainment</option>
        <option value="utilities">Utilities</option>
      </select>
    );
  };
  
  export default ExpenseFilter;
  