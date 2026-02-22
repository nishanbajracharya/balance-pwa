import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isSameDay, startOfMonth } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';

import Appbar from './appbar';
import ROUTES from '../constants/route';
import Button from '../components/button';
import SwipeableView from './swipeableView';
import ExpenseItem from '../components/listItem';
import * as balanceActions from '../actions/balance';
import type { RootState, AppDispatch } from '../store';

export default function Main() {
  const dispatch = useDispatch<AppDispatch>();
  const expense = useSelector((state: RootState) => state.expense);
  const balance = useSelector((state: RootState) => state.balance);

  useEffect(() => {
    const firstDayOfMonth = startOfMonth(new Date());
    if (isSameDay(firstDayOfMonth, new Date())) {
      dispatch(balanceActions.resetInitialBalanceForMonth());
    }
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div>
      <Appbar sync />
      <SwipeableView balance={balance} />
      <p className="expense-section-title">Recent Expenses</p>
      <ul className="expense-section">
        {expense.list.slice(0, 5).map((id) => (
          <ExpenseItem
            key={id}
            title={expense.data[id].title}
            value={expense.data[id].value}
          />
        ))}
        {expense.list.length === 0 && (
          <li className="expense-item center empty">Nothing to show</li>
        )}
      </ul>
      {expense.list.length > 0 && (
        <p
          className="expense-section-more"
          onClick={() => navigate(ROUTES.EXPENSE)}
        >
          more
        </p>
      )}
      <div className="button-container">
        <Button
          primary
          label="Add Expense"
          onClick={() => navigate(ROUTES.ADD_EXPENSE)}
        />
        <Button
          secondary
          label="Add Balance"
          onClick={() => navigate(ROUTES.ADD_BALANCE)}
        />
      </div>
    </div>
  );
}
