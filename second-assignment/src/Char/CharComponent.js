import React from 'react';

const style = {
    display: 'inline-block',
    width: '46px',
    padding: '16px 0',
    margin: '16px',
    textAlign: 'center',
    border: '2px solid #ec524b',
    borderRadius: '5px',
}

const charComponent = (props) => {
    return <p style={style} onClick={props.onClick}>{props.char}</p>
}

export default charComponent;