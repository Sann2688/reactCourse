import React, {useState} from "react";

import Card from "../UI/Card";
import Filter from "./Filter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses (props) {
    const [selectedYear, setSelectedYear] = useState('2022');
    const filterApplyHandler = (year) => {
        setSelectedYear(year);
    };

    const preparedItems = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <Filter selectedYear={selectedYear} onFilterApply={filterApplyHandler} />
                <ExpensesChart expenses={preparedItems}/>
                <ExpensesList items={preparedItems} />
            </Card>
        </div>
    );
}

export default Expenses;