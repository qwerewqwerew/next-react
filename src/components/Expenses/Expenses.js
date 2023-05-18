import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = React.useState("2023");
	const changeYearFn = (year) => {
		setFilteredYear(year);
	};

	const filterYearFn = items.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});
	let expenseContent = <p>해당목록이 없습니다</p>;
	if (filterYearFn.length > 0) {
		expenseContent = filterYearFn.map((item) => {
			return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
		});
	}

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeYear={changeYearFn} />
				{expenseContent}
			</Card>
		</div>
	);
};
export default Expenses;
