import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpnseData) => {
    const expenseData = {
      ...enteredExpnseData, id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
export default NewExpense;