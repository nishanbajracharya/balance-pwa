import React from 'react';
import { connect } from 'react-redux';

import Appbar from './appbar';
import Button from '../components/button';
import SwipeableView from './swipeableView';
import ExpenseItem from '../components/expenseItem';

const Main = ({
  expense = {}
}) => <div>
  <Appbar />
  <SwipeableView />
  <ul className="expense-section">
    <p className="expense-section-title">Recent Expenses</p>
    {
      expense.list.map((id, key) => <ExpenseItem key={key} title={expense.data[id].title} value={expense.data[id].value} />)
    }
    <p className="expense-section-more">more</p>
  </ul>
  <div className="button-container">
    <Button label="Add Expense" primary/>
    <Button label="Add Balance" secondary/>
  </div>
</div>;

export default connect(state => ({
  expense: state.expense
}))(Main);
