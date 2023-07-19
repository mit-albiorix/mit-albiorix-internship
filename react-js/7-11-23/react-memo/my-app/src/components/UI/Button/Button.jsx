import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  // console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// when here you are wrapping button with memo still it will executed all the time beacuse it is executing function and it is non-primitive so it will not same all the time
export default React.memo(Button);