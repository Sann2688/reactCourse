import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import Filter from "./Filter";
import "./Expenses.css";

function Expenses (props) {
    const [selectedYear, setSelectedYear] = useState('2022');
    const filterApplyHandler = (year) => {
        setSelectedYear(year);
    };

    const preparedItems = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className="expenses">
                <Filter selectedYear={selectedYear} onFilterApply={filterApplyHandler} />
                {preparedItems.map((data, i) => {
                    return (
                        <ExpenseItem key={data.id} title={data.title} amount={data.amount} date={data.date}/>
                    )
                })}
            </Card>
        </div>
    );
}

export default Expenses;