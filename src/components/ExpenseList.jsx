import { Trash2 } from "lucide-react";

const ExpenseList = ({ item, deleteItem }) => {
  return (
    <div className="overflow-x-auto">
      {item.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          <p className="text-lg font-semibold">No expenses found</p>
          <p className="text-sm">Add some expenses to see them listed here.</p>
        </div>
      ) : (
        <table className="table table-zebra w-full border border-gray-200 mt-4">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th>#</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {item.map((items, index) => (
              <tr key={items.id} className="hover:bg-gray-50">
                <th className="font-semibold">{index + 1}</th>
                <td className="capitalize">{items.description}</td>
                <td>
                  <span className="badge badge-outline badge-primary text-xs">
                    ${items.amount.toFixed(2)}
                  </span>
                </td>
                <td className="capitalize">{items.category}</td>
                <td>
                  <button
                    className="btn btn-error btn-sm text-white flex items-center gap-1"
                    onClick={() => deleteItem(items.id)}
                  >
                    <Trash2 size={14} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="text-right py-3">
                <button className="btn btn-success btn-sm text-white">
                  Total: $
                  <span className="badge badge-accent text-white ml-2">
                    {item.reduce((total, item) => total + item.amount, 0).toFixed(2)}
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
