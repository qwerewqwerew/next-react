import React from "react";
import Expenses from "./components/Expenses/Expenses";
function App() {
	const expenses = [
		{ id: "e1", title: "화장지", amount: 9400, date: new Date(2019, 7, 14) },
		{ id: "e2", title: "모니터", amount: 200000, date: new Date(2021, 2, 12) },
		{ id: "e3", title: "자동차보험", amount: 294000, date: new Date(2020, 4, 1) },
		{ id: "e4", title: "밥상(스뎅)", amount: 4500, date: new Date(2022, 5, 12) },
	];

	return (
		<div>
			<h1>가계부</h1>
			<Expenses items={expenses} />
		</div>
	);
}
export default App;
