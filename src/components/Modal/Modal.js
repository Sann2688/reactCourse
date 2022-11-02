import React from "react";

function Modal (props) {
    const close = () => {
        props.onAccept(false);
    }

    return (
        <div>
            <div>{props.title}</div>
            <div>{props.content}</div>
            <button type="button" onClick={close}>Okay</button>
        </div>
    );
}

export default Modal;