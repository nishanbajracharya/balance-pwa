import React from 'react';

import Fullscreen from '../components/fullscreen';

const AddExpense = ({
  history
}) => <Fullscreen onRequestClose={() => history.goBack()} title="Add Expense">
</Fullscreen>;

export default AddExpense;
