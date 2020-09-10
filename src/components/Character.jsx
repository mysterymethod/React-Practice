import React from 'react';

const character = (props) => {
    
    const customStyle = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }
    
    return (
        <h1 style = {customStyle} onClick = {props.click}> {props.text} </h1>
    );
}

export default character;