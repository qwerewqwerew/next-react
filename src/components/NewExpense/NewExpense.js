import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
	const [isAdding, setIsAdding] = useState(false);
	const addingFn = () => {
		setIsAdding(true);
	};
	const saveExpenseFn = (data) => {
		const expenseData = { ...data, id: Math.random().toString() };
		props.onAddExpense(expenseData);
	};
	const addCancelfn = () => {
		setIsAdding(false);
	};
	return (
		<div className='new-expense'>
			{!isAdding && <button onClick={addingFn}>지출추가</button>}
			{isAdding && <ExpenseForm onSaveExpense={saveExpenseFn} onCancel={addCancelfn} />}
		</div>
	);
};
export default NewExpense;
