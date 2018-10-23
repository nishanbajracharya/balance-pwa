import React from 'react';
import { connect } from 'react-redux';

import Input from '../components/input';
import BalanceItem from '../components/listItem';
import Fullscreen from '../components/fullscreen';

const AddBalance = ({
  history,
  balance
}) => <Fullscreen onRequestClose={() => history.goBack()} title="Add Balance">
  <div className="input-container">
    <p>Add some amount to your current balance.</p>
    <Input placeholder="How much do you want to add?" />
    <BalanceItem title="Current Balance" value={balance.current}/>
    <BalanceItem title="New Balance" value={balance.current}/>
  </div>
</Fullscreen>;

export default connect(state => ({
  balance: state.balance
}))(AddBalance);
