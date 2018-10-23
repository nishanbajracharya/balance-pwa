export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (value, title = 'Expense') => ({
  type: ADD_EXPENSE,
  payload: {
    value,
    title
  }
});
