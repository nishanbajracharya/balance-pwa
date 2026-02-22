import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/main';
import Sync from './views/sync';
import ROUTES from './constants/route';
import Expense from './views/expenses';
import AddExpense from './views/addExpense';
import AddBalance from './views/addBalance';

const AppRouter: React.FC = () => (
  <Router>
    <div className="route-container">
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SYNC} element={<Sync />} />
        <Route path={ROUTES.EXPENSE} element={<Expense />} />
        <Route path={ROUTES.ADD_EXPENSE} element={<AddExpense />} />
        <Route path={ROUTES.ADD_BALANCE} element={<AddBalance />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
