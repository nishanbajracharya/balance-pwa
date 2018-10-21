import React from 'react';
import classnames from 'classnames';

const Button = ({
  label,
  primary,
  secondary
}) => <button className={
  classnames('button', {
    primary,
    secondary
  })
}>{label}</button>;

export default Button;
