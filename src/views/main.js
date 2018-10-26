import React from 'react';
import { connect } from 'react-redux';
import isSameDay from 'date-fns/is_same_day';
import startOfMonth from 'date-fns/start_of_month';

import Appbar from './appbar';
import ROUTES from '../constants/route';
import Button from '../components/button';
import SwipeableView from './swipeableView';
import ExpenseItem from '../components/listItem';
import * as balanceActions from '../actions/balance';

class Main extends React.PureComponent {
  componentDidMount() {
    const firstDayOfMonth = startOfMonth(new Date());

    isSameDay(firstDayOfMonth, new Date()) && this.props.resetInitialBalance();
  }
  render() {
    return <div>
      <Appbar sync />
      <SwipeableView />
      <p className="expense-section-title">Recent Expenses</p>
      <ul className="expense-section">
        {this.props.expense.list.slice(0, 5).map((id, key) => (
          <ExpenseItem
            key={key}
            title={this.props.expense.data[id].title}
            value={this.props.expense.data[id].value}
          />
        ))}
        {this.props.expense.list.length === 0 && <li className="expense-item center empty">Nothing to show</li>}
      </ul>
      {this.props.expense.list.length > 0 && <p className="expense-section-more" onClick={() => this.props.history.push(ROUTES.EXPENSE)}>more</p>}
      <div className="button-container">
        <Button
          primary
          label="Add Expense"
          onClick={() => this.props.history.push(ROUTES.ADD_EXPENSE)}
        />
        <Button
          secondary
          label="Add Balance"
          onClick={() => this.props.history.push(ROUTES.ADD_BALANCE)}
        />
      </div>
    </div>
  }
}

export default connect(state => ({
  expense: state.expense,
}),
dispatch => ({
  resetInitialBalance: () => dispatch(balanceActions.resetInitialBalanceForMonth())
}))(Main);
