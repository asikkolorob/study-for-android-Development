import React from 'react';

const ComponentTest = (props) => {
    return (
        <div>
            <h3> Name: {props.name} </h3>
            <p> Email: {props.email} </p>
            <p> Address: {props.address} </p>
        </div>
    )
}

export default ComponentTest;
