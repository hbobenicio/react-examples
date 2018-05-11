import React from 'react'
import classes from './Button.css'

const Button = (props) => {
  const typeClass = classes[props.type];
  const btnClasses = [classes.Button, typeClass].join(' ');

  return (
    <button
      className={btnClasses}
      onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;