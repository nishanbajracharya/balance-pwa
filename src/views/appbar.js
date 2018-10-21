import React from 'react';

import { ReactComponent as Back } from '../assets/images/back.svg';
import { ReactComponent as Sync } from '../assets/images/sync.svg';

const Appbar = ({
  title = 'Balance'
}) => <div className="appbar">
  <Back />
  <p className="app-title">{title}</p>
  <Sync />
</div>;

export default Appbar;
