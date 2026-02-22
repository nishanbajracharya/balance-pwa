import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

import ROUTES from '../constants/route';
import { useDarkMode } from '../common/hooks';
import Back from '../assets/images/back.svg?react';
import Sync from '../assets/images/sync.svg?react';
import DarkMode from '../assets/images/dark-mode.svg?react';

export type AppbarProps = {
  sync?: boolean;
  back?: boolean;
  title?: string;
  onRequestClose?: () => void;
};

const iconSize = 48;

function Appbar({
  sync = false,
  back = false,
  title = 'Balance',
  onRequestClose = () => {},
}: AppbarProps) {
  const navigate = useNavigate();

  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="appbar">
      {back && <Back onClick={onRequestClose} height={iconSize} />}
      {sync && <Sync onClick={() => navigate(ROUTES.SYNC)} height={iconSize} />}
      <p
        className={classnames('app-title', {
          back,
          sync,
        })}
      >
        {title}
      </p>
      <DarkMode onClick={toggleDarkMode} height={iconSize} />
    </div>
  );
}

export default Appbar;
