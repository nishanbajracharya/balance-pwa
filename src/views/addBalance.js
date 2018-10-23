import React from 'react';
import { connect } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import BalanceItem from '../components/listItem';
import Fullscreen from '../components/fullscreen';
import * as balanceActions from '../actions/balance';

class AddBalance extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }

  handleAddBalance = value => {
    this.props.addBalance(value);

    this.fs.handleClose();
  }

  render() {
    return <Fullscreen ref={c => this.fs = c} onRequestClose={() => this.props.history.goBack()} title="Add Balance">
      <div className="input-container">
        <p className="input-container-title">Add some amount to your current balance.</p>
        <Input type="number" placeholder="How much do you want to add?" onValueChange={value => this.setState({ value: parseInt(value) })} />
        <BalanceItem title="Current Balance" value={this.props.balance.current} />
        <BalanceItem title="New Balance" value={this.props.balance.current + this.state.value} />
      </div>
      <div className="button-container">
        <Button
          primary
          label="Submit"
          onClick={() => this.handleAddBalance(this.state.value)}
        />
        <Button
          secondary
          label="Cancel"
          onClick={() => this.fs.handleClose()}
        />
      </div>
    </Fullscreen>;
  }
}

export default connect(state => ({
  balance: state.balance
}),
dispatch => ({
  addBalance: value => dispatch(balanceActions.addBalance(value))
}))(AddBalance);
