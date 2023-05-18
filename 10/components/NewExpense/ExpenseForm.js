import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
	const [inputTitle, setInputTitle] = useState("");
	const [inputNum, setInputNum] = useState("");
	const [inputDate, setInputDate] = useState("");
	const titleChangeHandler = (e) => {
		setInputTitle(e.target.value);
	};
	const numChangeHandler = (e) => {
		setInputNum(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setInputDate(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = { title: inputTitle, amount: inputNum, date: new Date(inputDate) };
		props.onSaveExpense(expenseData);
		setInputTitle("");
		setInputNum("");
		setInputDate("");
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>제목</label>
						<input type='text' onChange={titleChangeHandler} value={inputTitle} />
					</div>
					<div className='new-expense__control'>
						<label>금액</label>
						<input type='number' min='0' step='100' value={inputNum} onChange={numChangeHandler} />
					</div>
					<div className='new-expense__control'>
						<label>날짜</label>
						<input type='date' min='2020-01-01' max='2023-12-31' value={inputDate} onChange={dateChangeHandler} />
					</div>
				</div>
				<div className='new-expense__action'>
					<button type='cancel' onClick={props.onCancel}>취소하기</button>
					<button type='submit'>추가하기</button>
				</div>
			</form>
		</div>
	);
};
export default ExpenseForm;
