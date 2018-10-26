import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers';
import * as syncActions from './actions/sync';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = (state, action) => {
  if (action.type === syncActions.SYNC_ACCOUNT) {
    state = JSON.parse(atob(action.payload.code));
  }

  return rootReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);
