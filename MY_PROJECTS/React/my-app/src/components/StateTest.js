import {useState} from 'react';

const StateTest = () => {
    const [data,setData] = useState(0);

    function updateData() {
        setData(data+1);
    }

    function closeData() {
        setData(data-1);
    }

    return (
        <div>
            <h1>This is from state</h1>
            <h1> {data} </h1>
            <button onClick={updateData}> Update Data </button><button onClick={closeData}> Close Data </button>
        </div>
    )
}

export default StateTest;
