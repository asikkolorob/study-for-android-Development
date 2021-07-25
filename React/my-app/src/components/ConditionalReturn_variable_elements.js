import React from 'react';
import { useState } from 'react';

const ConditionalReturn_variable_elements = () => {

    const [ login, setLogin ] = useState({
        loginPage:false
    })

    return (
        login.loginPage ? <h1>I am from Function1</h1> : <h1>I am from Function2</h1>
    );
}

export default ConditionalReturn_variable_elements;