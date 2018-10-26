import { combineReducers } from 'redux';

import sync from './sync';
import balance from './balance';
import expense from './expense';

export default combineReducers({
  sync,
  balance,
  expense
});
