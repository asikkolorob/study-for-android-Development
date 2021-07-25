import React from 'react';
import { useState } from 'react';
const EventHandle = () => {

    const [name,setName] = useState({
        inputName: ''
    });
    

    const ClickHandler = (event) => {
        console.log(event.target);
    }

    const InputHnndler = (event) => {
        setName({ inputName: event.target.value });
    }

    return(
        <div>
            <input type='text' placeholder='Enter Your Name'
                onChange={InputHnndler}
                value={name.inputName}
            />
            <button onClick={ ClickHandler }>
                Clik Me
            </button>
            <div>
                {name.inputName ? <p>Hello Mr.{ name.inputName }</p> : 'No Name Type'}
            </div>
            
        </div>
    );
}
export default EventHandle;