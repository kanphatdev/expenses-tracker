import { Trash2 } from "lucide-react";

const ExpenseList = ({ item, deleteItem }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr className="capitalize">
            <th>#</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((items, index) => (
            <tr key={items.id} className="capitalize">
              <th className="font-bold">{index + 1}</th>
              <td>{items.description}</td>
              <td>
                <span className="badge text-xs">{items.amount}</span>
              </td>
              <td>{items.category}</td>
              <td>
                <button className="btn btn-error btn-xs" onClick={() => deleteItem(items.id)}>
                  <Trash2 size={12} />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="flex gap-4 mb-2">
              <button className="btn capitalize">
                Total
                <div className="badge badge-success text-white">
                  {item.reduce((total, item) => total + item.amount, 0).toFixed(2)}
                </div>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
