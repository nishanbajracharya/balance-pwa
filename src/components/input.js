import React from 'react';
import classnames from 'classnames';

const Component = ({ multiline, ...props }) =>
  multiline ? <textarea {...props} /> : <input {...props} />;

export default class Input extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      edited: false,
      focused: false,
      touched: false,
      value: undefined,
    };
  }

  onFocus = e => {
    this.props.onFocus(e);

    this.setState({ focused: true, touched: true });
  };

  onBlur = e => {
    this.props.onBlur(e);

    this.setState({ focused: false });
  };

  onInput = e => {
    this.props.onInput(e);
    this.props.onValueChange(e.target.value);

    this.setState({ edited: true, value: e.target.value });
  };

  render() {
    return (
      <Component
        onBlur={this.onBlur}
        type={this.props.type}
        onFocus={this.onFocus}
        onInput={this.onInput}
        value={this.state.value}
        multiline={this.props.multiline}
        placeholder={this.props.placeholder}
        className={classnames('input', {
          [this.props.activeClassName]: this.state.focused,
        })}
      />
    );
  }
}

Input.defaultProps = {
  onBlur: f => f,
  onFocus: f => f,
  onInput: f => f,
  onValueChange: f => f,
  activeClassName: 'active',
};
