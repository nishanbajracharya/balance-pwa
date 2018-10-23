import uniqid from 'uniqid';

import * as expenseActions from '../actions/expense';

const INITIAL_STATE = {
  data: {},
  list: [],
};

const expense = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case expenseActions.ADD_EXPENSE:
      const id = uniqid();
      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...action.payload,
            addedDate: new Date().toISOString(),
          },
        },
        list: [id, ...state.list],
      };
    default:
      return state;
  }
};

export default expense;
