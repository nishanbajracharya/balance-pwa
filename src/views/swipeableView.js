import React from 'react';
import { connect } from 'react-redux';
import { mod } from 'react-swipeable-views-core';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

import Card from '../components/card';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

function slideRenderer(params, balance) {
  const { index, key } = params;

  switch (mod(index, 3)) {
    case 0:
      return <Card key={key} title="Balance" value={balance.current} className="balance" />;
    case 1:
      return <Card key={key} title="Expenses" value={balance.expenses} className="expenses" />;
    case 2:
      return <Card key={key} title="Initial" value={balance.initial} className="initial" />;
    default:
      return null;
  }
}

const SwipeableView = ({
  balance
}) => <VirtualizeSwipeableViews className="card-swipe" slideRenderer={params => slideRenderer(params, balance)} />

export default connect(state => ({
  balance: state.balance
}))(SwipeableView);
