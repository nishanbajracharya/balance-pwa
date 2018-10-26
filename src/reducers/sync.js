import format from 'date-fns/format';

import * as syncActions from '../actions/sync';

const INITIAL_STATE = {
  lastSynced: null
};

const sync = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case syncActions.SYNC_ACCOUNT:
      return {...state, lastSynced: format(new Date(), 'Do MMM YYYY hh:mm A')};
    default:
      return state;
  }
};

export default sync;
