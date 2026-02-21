import { combineReducers } from '@reduxjs/toolkit';

import sync from './sync';
import balance from './balance';
import expense from './expense';

// Combine all reducers
const rootReducer = combineReducers({
  sync,
  balance,
  expense,
});

export default rootReducer;

// Root state type for use in useSelector or store typing
export type RootReducerState = ReturnType<typeof rootReducer>;
