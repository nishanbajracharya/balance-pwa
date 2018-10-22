import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/main';
import ROUTES from './constants/route';
import AddExpense from './views/addExpense';

const AppRouter = () => (
  <Router>
    <div className="route-container">
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ADD_EXPENSE} component={AddExpense} />
    </div>
  </Router>
);
export default AppRouter;
