import React, {useState} from "react";

import styles from './Input.module.css';

function Input (props) {
    const [inputValue, setInputValue] = useState(props.value);
    const updateValue = (event) => {
        setInputValue(event.target.value);
        props.onElementUpdate({name: event.target.getAttribute('name'), value: event.target.value})
    }

    return (
        <div className={styles['form-control']} >
            <label>{props.label}</label>
            <input
                type={props.type}
                className={props.className}
                name={props.name}
                value={inputValue}
                disabled={props.disabled}
                onChange={updateValue}
            />
        </div>
    );
}

export default Input;