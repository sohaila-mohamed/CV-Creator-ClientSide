import React from 'react'
import { useSelector } from 'react-redux';
import "./Me.css";
function Me() {
    const userAuth = useSelector(state => state.auth)
    return (
        <div className="me-container">
            <h1>Welcome {userAuth.userData.firstName} {userAuth.userData.lastName}</h1>
        </div>
    )
}

export default Me
