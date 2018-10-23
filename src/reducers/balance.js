import uniqid from 'uniqid';
import isThisMonth from 'date-fns/is_this_month';

import * as balanceActions from '../actions/balance';
import * as expenseActions from '../actions/expense';


const INITIAL_STATE = {
  current: 0,
  initial: 0,
  expenses: 0,
  data: {},
  list: [],
};

const getInitialBalance = (state, value = 0) => {
  const thisMonth = state.list.filter(item => isThisMonth(state.data[item].addedDate));

  const lastOfThisMonth = thisMonth[thisMonth.length - 1];

  return thisMonth.length ? state.data[lastOfThisMonth].value : value;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case balanceActions.RESET_INITIAL_BALANCE_FOR_MONTH:
      return {...state, initial: getInitialBalance(state, 0)};
    case balanceActions.ADD_BALANCE: {
      const id = uniqid();

      const thisMonth = state.list.filter(item => isThisMonth(state.data[item].addedDate));

      return {
        ...state,
        current: state.current + action.payload.value,
        initial: getInitialBalance(state, action.payload.value),
        data: {
          ...state.data,
          [id]: {
            ...action.payload,
            addedDate: new Date().toISOString(),
          },
        },
        list: [id, ...thisMonth]
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
};
