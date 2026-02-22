import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';

import rootReducer from './reducers';
import * as syncActions from './actions/sync';

const persistConfig = {
  key: 'root',
  storage,
};

// Use `any` for action to satisfy redux-persist
const persistedReducer = persistReducer(
  persistConfig,
  (state: ReturnType<typeof rootReducer> | undefined, action: any) => {
    if (action.type === syncActions.SYNC_ACCOUNT) {
      try {
        state = JSON.parse(atob(action.payload.code));
      } catch {
        // ignore malformed sync payload
      }
    }
    return rootReducer(state, action);
  }
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, REGISTER, FLUSH, PAUSE, PURGE],
      },
    }),
});

export const persistor = persistStore(store);

// Typed hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
