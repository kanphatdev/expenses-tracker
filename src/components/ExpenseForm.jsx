import { useForm } from "react-hook-form";

const ExpenseForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    onSubmit({ ...data, amount: parseFloat(data.amount) }); // Convert amount to number
    reset(); // Reset form after submission
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-4">
      <div className="card-body">
        <h2 className="card-title text-center">Add Expense</h2>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
          
          {/* Description Input */}
          <div>
            <input
              type="text"
              placeholder="Description"
              {...register("description", { required: "Description is required" })}
              className="input input-bordered w-full"
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Amount Input */}
          <div>
            <input
              type="number"
              placeholder="Amount"
              {...register("amount", {
                required: "Amount is required",
                min: { value: 1, message: "Amount must be at least 1" },
              })}
              className="input input-bordered w-full"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>
            )}
          </div>

          {/* Category Select */}
          <div>
            <select
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option value="groceries">Groceries</option>
              <option value="entertainment">Entertainment</option>
              <option value="utilities">Utilities</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
