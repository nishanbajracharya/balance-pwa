import { combineReducers } from 'redux';

import balance from './balance';
import expense from './expense';

export default combineReducers({
  balance,
  expense
});
