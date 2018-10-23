export const ADD_EXPENSE = 'ADD_EXPENSE';
export const RESET_EXPENSE_FOR_MONTH = 'RESET_EXPENSE_FOR_MONTH';

export const addExpense = (value, title = 'Expense') => ({
  type: ADD_EXPENSE,
  payload: {
    value,
    title
  }
});

export const resetExpenseForMonth = () => ({
  type: RESET_EXPENSE_FOR_MONTH
});
