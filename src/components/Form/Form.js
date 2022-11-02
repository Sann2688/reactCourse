import React, {useState} from "react";

import Input from "../FormElements/Input";

function Form (props) {
    const prepareFormData = () => {
        let formData = {};
        props.formInputs.forEach(element => {
            formData[element.name] = element.value;
        });
        return formData;
    }
    const [formData, setFormData] = useState(prepareFormData());
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddUser(formData);
    }

    const updateElementHandler = (data) => {
        setFormData((prevState) => {
            return {...prevState, [data.name]: data.value}
        });
    }

    return (
        <form onSubmit={submitHandler}>
            {props.formInputs.map((data, i) => {
                return (
                    <Input
                        key={data.name}
                        name={data.name}
                        label={data.label}
                        type={data.type}
                        value={data.value}
                        disabled={data.disabled}
                        className={data.className}
                        onElementUpdate={updateElementHandler}
                    />
                )
            })}
            <button type="submit">{props.buttonLabel}</button>
        </form>
    );
}

export default Form;
