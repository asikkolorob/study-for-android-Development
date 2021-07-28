import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateAge,updateName,updateStatus,fetchUserName} from '../store/reducers/UserReducer'

function Profile() {

    const {name,age,status} = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    const UpDateAge = (age) => {
        dispatch(updateAge(age))
    }

    const UpDateName = () => {
        dispatch(fetchUserName())
    }

    const UpDateCoder = (status) => {
        dispatch(updateStatus(status))
    }

    return (
        <div>
            <h2>I am {name}</h2>
            <h2>My Age is {age}</h2>
            <h2>My status {status}</h2>
            <button onClick={() => UpDateAge(40)}>Update Age</button>
            <button onClick={() => UpDateName()}>Update Name</button>
            <button onClick={() => UpDateCoder('Single')}>Update Status</button>
        </div>
    )
}

export default Profile;