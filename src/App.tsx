import { Provider } from 'react-redux';
import { registerSW } from 'virtual:pwa-register';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './router';
import { store, persistor } from './store';

registerSW({
  immediate: true,
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
