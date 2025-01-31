const ExpenseList = ({ item }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        {/* head */}
        <thead>
          <tr className="capitalize">
            <th>#</th>
            <th>description</th>
            <th>amount</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {item.map((items, index) => (
            <tr key={index} className="capitalize">
              <th className="font-bold">{index + 1}</th>
              <td>{items.description}</td>
              <td><span className="badge text-xs
              
              
              ">{items.amount}</span></td>
              <td>{items.category}</td>
            </tr>
          ))}
<tr>
  <td className="flex gap-4 mb-2">

  <button className="btn capitalize">
  total
  <div className="badge badge-success text-white">

    {item.reduce((total,item) => total +item.amount,0).toFixed(2)}
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
