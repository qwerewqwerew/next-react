import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {
  const saveExpenseFn = (data) => {
    const expenseData = {...data, id: Math.random().toString()};
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseFn} />
    </div>
  )
}
export default NewExpense;