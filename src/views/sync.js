import React from 'react';
import { connect } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import * as syncActions from '../actions/sync';
import Fullscreen from '../components/fullscreen';

class Sync extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      code: undefined
    };
  }

  copyToClipboard = text => {
    const textField = document.createElement('textarea');
    textField.innerText = text;

    const parentElement = document.body;
    parentElement.appendChild(textField);

    textField.select();
    document.execCommand('copy');

    parentElement.removeChild(textField);
  }

  render() {
    return (
      <Fullscreen
        title="Sync Your Balance"
        onRequestClose={() => this.props.history.goBack()}
      >
        <p className="sync-title">
          Sync your account to keep track of your balance across multiple
          devices
        </p>
        <div className="sync-code">{this.props.code}</div>
        <p className="sync-message center">
          This is your balance account signature. Paste this into another device
          to sync with it.
        </p>
        <div className="full-width">
          <Button label="Copy Signature" primary onClick={() => this.copyToClipboard(this.props.code)}/>
        </div>
        <p className="sync-or">OR</p>
        <div className="full-width">
          <Input placeholder="Paste your account signature here" multiline onValueChange={code => this.setState({ code })} />
          <Button label="Sync Balance" primary onClick={() => this.state.code && this.props.sync(this.state.code)} />
        </div>
        <p className="sync-message center">
          Last Synced: {this.props.lastSynced}
        </p>
      </Fullscreen>
    );
  }
}

export default connect(state => ({
  code: btoa(JSON.stringify(state)),
}),
dispatch => ({
  sync: code => dispatch(syncActions.syncAccount(code))
}))(Sync);
