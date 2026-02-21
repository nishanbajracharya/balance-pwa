import uniqid from 'uniqid';
import { isThisMonth } from 'date-fns';

import * as balanceActions from '../actions/balance';
import * as expenseActions from '../actions/expense';
import type { BalanceActions } from '../actions/balance';
import type { ExpenseActions } from '../actions/expense';

export type BalanceItem = {
  id: string;
  value: number;
  addedDate: string;
};

export type BalanceState = {
  current: number;
  initial: number;
  expenses: number;
  data: Record<string, BalanceItem>;
  list: string[];
};

const INITIAL_STATE: BalanceState = {
  current: 0,
  initial: 0,
  expenses: 0,
  data: {},
  list: [],
};

const getInitialBalance = (state: BalanceState, value = 0): number => {
  const thisMonth = state.list.filter((item) =>
    isThisMonth(new Date(state.data[item].addedDate))
  );

  const lastOfThisMonth = thisMonth[thisMonth.length - 1];

  return thisMonth.length ? state.data[lastOfThisMonth].value : value;
};

type CombinedActions = BalanceActions | ExpenseActions;

export default function balanceReducer(
  state: BalanceState = INITIAL_STATE,
  action: CombinedActions
): BalanceState {
  switch (action.type) {
    case balanceActions.RESET_INITIAL_BALANCE_FOR_MONTH:
      return { ...state, initial: getInitialBalance(state, 0) };

    case balanceActions.ADD_BALANCE: {
      const id = uniqid();

      const thisMonth = state.list.filter((item) =>
        isThisMonth(new Date(state.data[item].addedDate))
      );

      return {
        ...state,
        current: state.current + action.payload.value,
        initial: getInitialBalance(state, action.payload.value),
        data: {
          ...state.data,
          [id]: {
            id,
            value: action.payload.value,
            addedDate: new Date().toISOString(),
          },
        },
        list: [id, ...thisMonth],
      };
    }

    case expenseActions.ADD_EXPENSE:
      return {
        ...state,
        expenses: state.expenses + action.payload.value,
        current: state.current - action.payload.value,
      };

    default:
      return state;
  }
}
