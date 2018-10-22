import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './views/main';
import ROUTES from './constants/route';

const AppRouter = () => (
  <Router>
    <div className="route-container">
      <Route exact path={ROUTES.HOME} component={Home} />
    </div>
  </Router>
);
export default AppRouter;
