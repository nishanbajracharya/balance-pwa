import omit from 'lodash.omit';
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import * as syncActions from '../actions/sync';
import Fullscreen from '../components/fullscreen';

import type { RootState, AppDispatch } from '../store';

type SyncProps = {
  history: {
    goBack: () => void;
  };
};

export default function Sync({ history }: SyncProps) {
  const dispatch = useDispatch<AppDispatch>();

  // Get encoded state excluding _persist
  const code = useSelector((state: RootState) =>
    btoa(JSON.stringify(omit(state, '_persist')))
  );

  const lastSynced = useSelector(
    (state: RootState) => state.sync.lastSynced || 'Never'
  );

  const [localCode, setLocalCode] = useState<string>('');

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    } else {
      // Fallback for older browsers
      const textField = document.createElement('textarea');
      textField.value = text;
      textField.style.position = 'fixed'; // prevent scrolling
      document.body.appendChild(textField);
      textField.select();
      try {
        document.execCommand('copy'); // deprecated, fallback only
        console.log('Copied to clipboard (fallback)');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      document.body.removeChild(textField);
    }
  };

  const handleSync = useCallback(() => {
    if (localCode.trim()) {
      dispatch(syncActions.syncAccount(localCode));
      setLocalCode(''); // optional: clear input after syncing
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
          primary
          label="Copy Signature"
          onClick={() => copyToClipboard(code)}
        />
      </div>

      <p className="sync-or">OR</p>

      <div className="full-width">
        <Input
          multiline
          value={localCode}
          onValueChange={setLocalCode}
          placeholder="Paste your account signature here"
        />
        <Button label="Sync Balance" primary onClick={handleSync} />
      </div>

      <p className="sync-message center">Last Synced: {lastSynced}</p>
    </Fullscreen>
  );
}
