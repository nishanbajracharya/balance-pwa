export const ADD_BALANCE = 'ADD_BALANCE';
export const RESET_INITIAL_BALANCE_FOR_MONTH = 'RESET_INITIAL_BALANCE_FOR_MONTH';

export const addBalance = (value, title = 'Balance') => ({
  type: ADD_BALANCE,
  payload: {
    value,
    title
  }
});

export const resetInitialBalanceForMonth = () => ({
  type: RESET_INITIAL_BALANCE_FOR_MONTH
});
