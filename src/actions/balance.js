export const ADD_BALANCE = 'ADD_BALANCE';

export const addBalance = (value, title) => ({
  type: ADD_BALANCE,
  payload: {
    value,
    title
  }
});
