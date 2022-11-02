import React from "react";

import Item from "./Item";

function List (props) {

    return (
        <ul>
            {props.users.map((data, i) => {
                return (
                    <Item key={data.username + i} username={data.username} age={data.age}/>
                )
            })}
        </ul>
    );
}

export default List;
