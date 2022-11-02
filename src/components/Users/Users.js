import React, {useState} from "react";

import Form from "../Form/Form";
import List from "./components/List/List";
import Modal from "../Modal/Modal";

const FORM_DATA = [
    {label: 'Username', type: 'text', value: '', disabled: false, name: 'username', className: 'input'},
    {label: 'Age (Years)', type: 'number', value: '', disabled: false, name: 'age', className: 'input'}
]

function Users () {
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);
    const addUser = (formData) => {
        if (formData.username && formData.age) {
            if (formData.age > 0) {
                setUsers((prevState) => {
                    return [...prevState, formData]
                });
            } else {
                setIsError({title: 'Error', content: 'Age must be a valid number!'});
            }
        } else {
            setIsError({title: 'Error', content: 'All fields must be filled!'});
        }
    };

    const closeModal = (data) => {
        setIsError(data);
    }

    return (
        <div>
            <Form formInputs={FORM_DATA} buttonLabel={'Add User'} onAddUser={addUser} />
            {isError ? <Modal title={isError.title} content={isError.content} onAccept={closeModal}/> : ''}
            <List users={users} />
        </div>
    );
}

export default Users;
