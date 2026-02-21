import { format } from 'date-fns';
import type { SyncActions } from '../actions/sync';
import * as syncActions from '../actions/sync';

export type SyncState = {
  lastSynced: string | null;
};

const INITIAL_STATE: SyncState = {
  lastSynced: null,
};

export default function syncReducer(
  state: SyncState = INITIAL_STATE,
  action: SyncActions
): SyncState {
  switch (action.type) {
    case syncActions.SYNC_ACCOUNT:
      return {
        ...state,
        lastSynced: format(new Date(), 'do MMM yyyy hh:mm a'),
      };

    default:
      return state;
  }
}
