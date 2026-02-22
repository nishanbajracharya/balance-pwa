import { useState, FocusEvent, ChangeEvent } from 'react';
import classnames from 'classnames';

export type InputProps = {
  type?: string;
  value?: string;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  activeClassName?: string;
  onValueChange?: (value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const Component = ({
  type,
  onBlur,
  onFocus,
  onChange,
  multiline,
  className,
  placeholder,
}: InputProps) =>
  multiline ? (
    <textarea
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  ) : (
    <input
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );

export default function Input({
  type,
  placeholder,
  multiline = false,
  onBlur = () => {},
  onFocus = () => {},
  onChange = () => {},
  onValueChange = () => {},
  activeClassName = 'active',
}: InputProps) {
  const [focused, setFocused] = useState(false);

  const _onFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onFocus(e);
    setFocused(true);
  };

  const _onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onBlur(e);
    setFocused(false);
  };

  const _onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e);
    onValueChange(e.target.value);
  };

  return (
    <Component
      type={type}
      onBlur={_onBlur}
      onFocus={_onFocus}
      onChange={_onChange}
      multiline={multiline}
      placeholder={placeholder}
      className={classnames('input', { [activeClassName]: focused })}
    />
  );
}
