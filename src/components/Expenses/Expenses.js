import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import Filter from "./Filter";
import "./Expenses.css";

function Expenses (props) {
    const [selectedYear, setSelectedYear] = useState('2022');
    const filterApplyHandler = (year) => {
        setSelectedYear(year);
        console.log(year);
    };

    return (
        <div>
            <Card className="expenses">
                <Filter selectedYear={selectedYear} onFilterApply={filterApplyHandler} />
                {props.expenses.map((data, i) => {
                    return (
                        <ExpenseItem key={i} title={data.title} amount={data.amount} date={data.date}/>
                    )
                })}
            </Card>
        </div>
    );
}

export default Expenses;