import React from 'react';
import classnames from 'classnames';

const Button = ({
  label,
  primary,
  secondary,
  className,
  onClick = f => f,
}) => <button onClick={onClick} className={
  classnames('button', className, {
    primary,
    secondary
  })
}>{label}</button>;

export default Button;
