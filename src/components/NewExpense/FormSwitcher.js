function FormSwitcher (props) {
    const formTrigger = () => {
        props.onFormStateUpdate(true);
    }

    return (
        <button onClick={formTrigger}>Add New Expense</button>
    );
}

export default FormSwitcher;