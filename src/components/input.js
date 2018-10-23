import React from 'react';
import classnames from 'classnames';

export default class Input extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      value: null,
      edited: false,
      focused: false,
      touched: false,
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

    this.setState({ edited: true, value: e.target.value });
  };

  render() {
    return (
      <input
        {...this.props}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onInput={this.onInput}
        value={this.state.value}
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
  activeClassName: 'active',
};
