import classnames from 'classnames';
import { useHistory } from 'react-router-dom';

import ROUTES from '../constants/route';
import Back from '../assets/images/back.svg?react';
import Sync from '../assets/images/sync.svg?react';

export type AppbarProps = {
  sync?: boolean;
  back?: boolean;
  title?: string;
  onRequestClose?: () => void;
};

function Appbar({
  sync = false,
  back = false,
  title = 'Balance',
  onRequestClose = () => {},
}: AppbarProps) {
  const history = useHistory();

  return (
    <div className="appbar">
      {back && <Back onClick={onRequestClose} />}
      <p
        className={classnames('app-title', {
          back,
          sync,
        })}
      >
        {title}
      </p>
      {sync && <Sync onClick={() => history.push(ROUTES.SYNC)} />}
    </div>
  );
}

export default Appbar;
