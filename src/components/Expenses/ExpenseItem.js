import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const updateTitle = () => {
        setTitle('updated!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={updateTitle}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;