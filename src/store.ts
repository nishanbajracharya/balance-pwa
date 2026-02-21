import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers';
import * as syncActions from './actions/sync';
import type { SyncActions } from './actions/sync';

const persistConfig = {
  key: 'root',
  storage,
};

// Override reducer to handle SYNC_ACCOUNT payload
const reducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: SyncActions
) => {
  if (action.type === syncActions.SYNC_ACCOUNT) {
    try {
      state = JSON.parse(atob(action.payload.code));
    } catch {
      // ignore malformed sync payload
    }
  }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);

// Typed hooks support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
