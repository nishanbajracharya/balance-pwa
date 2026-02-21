export const ADD_EXPENSE = 'ADD_EXPENSE' as const;
export const RESET_EXPENSE_FOR_MONTH = 'RESET_EXPENSE_FOR_MONTH' as const;

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  payload: {
    value: number;
    title: string;
  };
}

export interface ResetExpenseForMonthAction {
  type: typeof RESET_EXPENSE_FOR_MONTH;
}

export type ExpenseActions = AddExpenseAction | ResetExpenseForMonthAction;

export const addExpense = (
  value: number,
  title = 'Expense'
): AddExpenseAction => ({
  type: ADD_EXPENSE,
  payload: {
    value,
    title,
  },
});

export const resetExpenseForMonth = (): ResetExpenseForMonthAction => ({
  type: RESET_EXPENSE_FOR_MONTH,
});
