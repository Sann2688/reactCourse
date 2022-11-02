import React from "react";

function Item (props) {
    return (
        <li>{props.username + ' (' + props.age + ' years old)'}</li>
    );
}

export default Item;
