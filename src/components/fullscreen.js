import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _debounce from 'lodash.debounce';

import Appbar from '../views/appbar';

export default class Fullscreen extends React.Component {
  constructor() {
    super();

    this.state = {
      close: false
    };

    this.handleClose = _debounce(this.handleClose, 150, { leading: true, trailing: false });
  }

  handleClose = () => {
    this.setState({ close: true });
    let timeout = setTimeout(() => {
      this.props.onRequestClose();
      clearTimeout(timeout);
    }, 140);
  }

  render() {
    return <div className={classnames('fullscreen-page', { close: this.state.close })}>
      <Appbar back onRequestClose={this.handleClose} title={this.props.title} />
      {this.props.children}
    </div>;
  }
}

Fullscreen.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
};

Fullscreen.defaultProps = {
  onRequestClose: f => f
};
