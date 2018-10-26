import React from 'react';
import { connect } from 'react-redux';

import Fullscreen from '../components/fullscreen';

const Expenses = ({
  history
}) => <Fullscreen onRequestClose={() => history.goBack()} title="Expense"></Fullscreen>;

export default connect(state => ({
  expenses: state.expenses,
}))(Expenses);
