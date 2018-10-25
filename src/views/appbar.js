import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom'

import ROUTES from '../constants/route';
import { ReactComponent as Back } from '../assets/images/back.svg';
import { ReactComponent as Sync } from '../assets/images/sync.svg';

const Appbar = ({
  history,
  sync = false,
  back = false,
  title = 'Balance',
  onRequestClose = f => f
}) => <div className="appbar">
  {back && <Back onClick={onRequestClose}/>}
  <p className={classnames('app-title', {
    back, sync
  })}>{title}</p>
  {sync && <Sync onClick={() => history.push(ROUTES.SYNC)}/>}
</div>;

export default withRouter(Appbar);
