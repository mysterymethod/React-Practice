import React from 'react';

const validation = (props) => {
    return (
        props.length > 5 ? <h1> Text is too Long </h1> : <h1> Text is to short </h1>
    )
}

export default validation;