import classnames from 'classnames';
import _debounce from 'lodash.debounce';
import React, { useState, forwardRef, useImperativeHandle } from 'react';

import Appbar from '../views/appbar';

export type FullscreenProps = {
  title: string;
  children: React.ReactNode;
  onRequestClose: () => void;
};

// Add a type for the ref methods you want to expose
export type FullscreenHandle = {
  handleClose: () => void;
};

const Fullscreen = forwardRef<FullscreenHandle, FullscreenProps>(
  ({ onRequestClose = () => {}, children, title }, ref) => {
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

    // Expose handleClose to parent via ref
    useImperativeHandle(ref, () => ({
      handleClose,
    }));

    return (
      <div className={classnames('fullscreen-page', { close })}>
        <Appbar back onRequestClose={_handleClose} title={title} />
        {children}
      </div>
    );
  }
);

export default Fullscreen;
