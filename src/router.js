import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/main';
import Sync from './views/sync';
import ROUTES from './constants/route';
import AddExpense from './views/addExpense';
import AddBalance from './views/addBalance';

const AppRouter = () => (
  <Router>
    <div className="route-container">
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SYNC} component={Sync} />
      <Route path={ROUTES.ADD_EXPENSE} component={AddExpense} />
      <Route path={ROUTES.ADD_BALANCE} component={AddBalance} />
    </div>
  </Router>
);
export default AppRouter;
