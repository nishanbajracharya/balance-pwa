import React from 'react';
import { connect } from 'react-redux';

import Appbar from './appbar';
import ROUTES from '../constants/route';
import Button from '../components/button';
import SwipeableView from './swipeableView';
import ExpenseItem from '../components/expenseItem';

const Main = ({
  expense = {},
  history
}) => <div>
  <Appbar sync/>
  <SwipeableView />
  <p className="expense-section-title">Recent Expenses</p>
  <ul className="expense-section">
    {
      expense.list.map((id, key) => <ExpenseItem key={key} title={expense.data[id].title} value={expense.data[id].value} />)
    }
  </ul>
  <p className="expense-section-more">more</p>
  <div className="button-container">
    <Button label="Add Expense" primary onClick={() => history.push(ROUTES.ADD_EXPENSE)}/>
    <Button label="Add Balance" secondary/>
  </div>
</div>;

export default connect(state => ({
  expense: state.expense
}))(Main);
