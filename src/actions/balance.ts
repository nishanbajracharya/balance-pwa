export const ADD_BALANCE = 'ADD_BALANCE' as const;
export const RESET_INITIAL_BALANCE_FOR_MONTH =
  'RESET_INITIAL_BALANCE_FOR_MONTH' as const;

export interface AddBalanceAction {
  type: typeof ADD_BALANCE;
  payload: {
    value: number;
    title: string;
  };
}

export interface ResetInitialBalanceForMonthAction {
  type: typeof RESET_INITIAL_BALANCE_FOR_MONTH;
}

export type BalanceActions =
  | AddBalanceAction
  | ResetInitialBalanceForMonthAction;

export const addBalance = (
  value: number,
  title = 'Balance'
): AddBalanceAction => ({
  type: ADD_BALANCE,
  payload: {
    value,
    title,
  },
});

export const resetInitialBalanceForMonth =
  (): ResetInitialBalanceForMonthAction => ({
    type: RESET_INITIAL_BALANCE_FOR_MONTH,
  });
