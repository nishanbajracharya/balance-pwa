import { useState, useCallback } from 'react';
import omit from 'lodash.omit';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import * as syncActions from '../actions/sync';
import Fullscreen from '../components/fullscreen';

// Adjust this import based on your store setup
import type { RootState, AppDispatch } from '../store';

type SyncProps = {
  history: {
    goBack: () => void;
  };
};

export default function Sync({ history }: SyncProps) {
  const dispatch = useDispatch<AppDispatch>();

  const code = useSelector((state: RootState) =>
    btoa(JSON.stringify(omit(state, '_persist')))
  );

  const lastSynced = useSelector(
    (state: RootState) => state.sync.lastSynced || 'Never'
  );

  const [localCode, setLocalCode] = useState<string | undefined>(undefined);

  const copyToClipboard = useCallback((text: string) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;

    const parentElement = document.body;
    parentElement.appendChild(textField);

    textField.select();
    document.execCommand('copy');

    parentElement.removeChild(textField);
  }, []);

  const handleSync = useCallback(() => {
    if (localCode) {
      dispatch(syncActions.syncAccount(localCode));
    }
  }, [dispatch, localCode]);

  return (
    <Fullscreen
      title="Sync Your Balance"
      onRequestClose={() => history.goBack()}
    >
      <p className="sync-title">
        Sync your account to keep track of your balance across multiple devices
      </p>

      <div className="sync-code">{code}</div>

      <p className="sync-message center">
        This is your balance account signature. Paste this into another device
        to sync with it.
      </p>

      <div className="full-width">
        <Button
          label="Copy Signature"
          primary
          onClick={() => copyToClipboard(code)}
        />
      </div>

      <p className="sync-or">OR</p>

      <div className="full-width">
        <Input
          placeholder="Paste your account signature here"
          multiline
          onValueChange={(value: string) => setLocalCode(value)}
        />
        <Button label="Sync Balance" primary onClick={handleSync} />
      </div>

      <p className="sync-message center">Last Synced: {lastSynced}</p>
    </Fullscreen>
  );
}
