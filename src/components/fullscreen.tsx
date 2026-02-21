import React, { useState } from 'react';
import classnames from 'classnames';
import _debounce from 'lodash.debounce';

import Appbar from '../views/appbar';

export type FullscreenProps = {
  title: string;
  children: React.ReactNode;
  onRequestClose?: () => void;
};

export default function Fullscreen({
  onRequestClose = () => {},
  children,
  title,
}: FullscreenProps) {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
    const timeout = setTimeout(() => {
      onRequestClose();
      clearTimeout(timeout);
    }, 140);
  };

  const _handleClose = _debounce(handleClose, 150, {
    leading: true,
    trailing: false,
  });

  return (
    <div className={classnames('fullscreen-page', { close })}>
      <Appbar back onRequestClose={_handleClose} title={title} />
      {children}
    </div>
  );
}
