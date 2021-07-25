import React from 'react';
import { useState } from 'react';

const ConditionalReturn_if_else = () => {

    const [login,setLogin] = useState({
        loginPage:true
    })

    if ( login.loginPage == true ) {
        return (
            <button>Log Out</button>
        )
    }
    else {
        return (
            <button>Login Now</button>
        )
    }
}

export default ConditionalReturn_if_else;