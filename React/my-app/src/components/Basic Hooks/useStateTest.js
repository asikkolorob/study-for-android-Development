import React, {useState} from 'react';

const useStateTest = () => {
    const state = useState(0);
    console.log (state);
    return (
        <div>
            <h1>I am hooks, I am awesome</h1>
        </div>
    );
}

export default useStateTest;