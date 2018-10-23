import React from 'react';

import Input from '../components/input';
import Fullscreen from '../components/fullscreen';

const AddBalance = ({
  history
}) => <Fullscreen onRequestClose={() => history.goBack()} title="Add Balance">
  <div className="input-container">
    <p>Add some amount to your current balance.</p>
    <Input placeholder="How much do you want to add?"/>
  </div>
</Fullscreen>;

export default AddBalance;
