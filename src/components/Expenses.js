import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses (props) {
    return (
        <div className="expenses">
            {props.expenses.map((data) => {
                return (
                    <ExpenseItem title={data.title} amount={data.amount} date={data.date}/>
                )
            })}
        </div>
    );
}

export default Expenses;