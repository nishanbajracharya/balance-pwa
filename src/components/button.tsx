import React from 'react';
import classnames from 'classnames';

export type ButtonProps = {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  label,
  primary = false,
  secondary = false,
  className = '',
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames('button', className, { primary, secondary })}
    >
      {label}
    </button>
  );
}
