import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="userOutput">
            <p><strong>Name:</strong> {props.name}</p>
            <p>Currently learning React</p>
        </div>
    )
}

export default UserOutput;
