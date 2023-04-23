import ExpenseItem from './ExpenseItem'

const ExpenseGroup = (props) => {
  console.log(props.prop[0].title);
  return (
    <div>
      <ExpenseItem title={props.prop[0].title} date={props.prop[0].date} amount={props.prop[0].amount}/>
      <ExpenseItem title={props.prop[1].title} date={props.prop[1].date} amount={props.prop[1].amount}/>
      <ExpenseItem title={props.prop[2].title} date={props.prop[2].date} amount={props.prop[2].amount}/>
      <ExpenseItem title={props.prop[3].title} date={props.prop[3].date} amount={props.prop[3].amount}/>
    </div>
  )
}
export default ExpenseGroup;