import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Card from './components/card';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Card title="Balance" value={100000} className="balance" />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
