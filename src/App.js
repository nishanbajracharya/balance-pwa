import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import SwipeableView from './views/swipeableView';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SwipeableView />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
