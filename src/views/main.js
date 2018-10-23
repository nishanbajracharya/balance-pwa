import React from 'react';
import { connect } from 'react-redux';

import Appbar from './appbar';
import ROUTES from '../constants/route';
import Button from '../components/button';
import SwipeableView from './swipeableView';
import ExpenseItem from '../components/listItem';

const Main = ({ expense = {}, history }) => (
  <div>
    <Appbar sync />
    <SwipeableView />
    <p className="expense-section-title">Recent Expenses</p>
    <ul className="expense-section">
      {expense.list.slice(0, 5).map((id, key) => (
        <ExpenseItem
          key={key}
          title={expense.data[id].title}
          value={expense.data[id].value}
        />
      ))}
      {expense.list.length === 0 && <li className="expense-item center empty">Nothing to show</li>}
    </ul>
    {expense.list.length > 0 && <p className="expense-section-more">more</p>}
    <div className="button-container">
      <Button
        primary
        label="Add Expense"
        onClick={() => history.push(ROUTES.ADD_EXPENSE)}
      />
      <Button
        secondary
        label="Add Balance"
        onClick={() => history.push(ROUTES.ADD_BALANCE)}
      />
    </div>
  </div>
);

export default connect(state => ({
  expense: state.expense,
}))(Main);
