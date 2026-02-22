import { getRandomUUID } from '../common/utils';
import * as expenseActions from '../actions/expense';
import type { ExpenseActions } from '../actions/expense';

export type ExpenseItem = {
  id: string;
  value: number;
  title: string;
  addedDate: string;
};

export type ExpenseState = {
  data: Record<string, ExpenseItem>;
  list: string[];
};

const INITIAL_STATE: ExpenseState = {
  data: {},
  list: [],
};

export default function expenseReducer(
  state: ExpenseState = INITIAL_STATE,
  action: ExpenseActions
): ExpenseState {
  switch (action.type) {
    case expenseActions.ADD_EXPENSE: {
      const id = getRandomUUID();

      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            id,
            value: action.payload.value,
            title: action.payload.title,
            addedDate: new Date().toISOString(),
          },
        },
        list: [id, ...state.list],
      };
    }

    default:
      return state;
  }
}
