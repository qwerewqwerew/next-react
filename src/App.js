import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const INIT_DATA = [
	{ id: "e1", title: "화장지", amount: 9400, date: new Date(2019, 7, 14) },
	{ id: "e2", title: "모니터", amount: 200000, date: new Date(2021, 2, 12) },
	{ id: "e3", title: "자동차보험", amount: 294000, date: new Date(2020, 4, 1) },
	{ id: "e4", title: "밥상(스뎅)", amount: 4500, date: new Date(2022, 5, 12) },
];
function App() {
	const [expenseList, setExpenseList] = React.useState(INIT_DATA);

	const addExpenseFn = (data) => {
		return setExpenseList((prevExpenses) => {
			return [data, ...prevExpenses];
		});
	};

	return (
		<div>
			<h1>가계부</h1>
			<NewExpense onAddExpense={addExpenseFn} />
			{/* <Expenses items={expenses} /> */}
			<Expenses items={expenseList} />
		</div>
	);
}
export default App;
