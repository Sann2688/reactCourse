import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import FormSwitcher from "./FormSwitcher";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const saveDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    };

    const updateFormVisibility = (state) => {
        setIsFormVisible(state);
    };

    return (
        <div className="new-expense">
            {
                isFormVisible ?
                    (<ExpenseForm isFormVisible={isFormVisible} onFormStateUpdate={updateFormVisibility} onSaveData={saveDataHandler} />) :
                    (<FormSwitcher isFormVisible={isFormVisible} onFormStateUpdate={updateFormVisibility}/>)
            }
        </div>
    );
}

export default NewExpense;