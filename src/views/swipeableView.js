import React from 'react';
import { mod } from 'react-swipeable-views-core';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';

import Card from '../components/card';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

function slideRenderer(params) {
  const { index, key } = params;

  switch (mod(index, 3)) {
    case 0:
      return <Card key={key} title="Balance" value={100000} className="balance" />;
    case 1:
      return <Card key={key} title="Expenses" value={100000} className="expenses" />;
    case 2:
      return <Card key={key} title="Initial" value={100000} className="initial" />;
    default:
      return null;
  }
}

const SwipeableView = () => <VirtualizeSwipeableViews className="card-swipe" slideRenderer={slideRenderer} />

export default SwipeableView;
