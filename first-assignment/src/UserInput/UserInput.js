import React from 'react';

const inputStyle = {
    border: '1px solid #d33f49',
    fontSize: '1rem',
    margin: '80px 0 0 0',
    padding: '5px',
    borderRadius: '20px',
    textIndent: '10px'
}

const UserInput = (props) => {
    return (
        <div>
            <input 
            style={inputStyle} 
            type="text"
            onChange={props.onChange} 
            value={props.name}/>
            <p><small>You can change the name</small></p>
        </div>
    )
}

export default UserInput;
