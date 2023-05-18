import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
	console.log(props);
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>해당목록이 없습니다</h2>;
	}
	return (
		<ul className='expenses-list'>
			{props.items.map((item) => {
				return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
			})}
		</ul>
	);
};
export default ExpenseList;
