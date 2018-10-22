import React from 'react';
import classnames from 'classnames';

const Button = ({
  label,
  primary,
  secondary,
  onClick = f => f,
}) => <button onClick={onClick} className={
  classnames('button', {
    primary,
    secondary
  })
}>{label}</button>;

export default Button;
