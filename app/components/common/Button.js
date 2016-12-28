import React, { PropTypes } from 'react';

const Button = ({classSet, handleClick, text}) => (
    <button type = "button" className= {`btn ${classSet}`} onClick={handleClick}>{text}</button>
);

Button.propType = {
    classSet : PropTypes.string,
    handleClick : PropTypes.func.isRequired,
    text: PropTypes.any
};

export default Button;