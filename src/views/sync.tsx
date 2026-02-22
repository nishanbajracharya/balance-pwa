import omit from 'lodash.omit';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import * as syncActions from '../actions/sync';
import Fullscreen from '../components/fullscreen';
import type { RootState, AppDispatch } from '../store';
import { copyToClipboard, encode } from '../common/utils';

export default function Sync() {
  const dispatch = useDispatch<AppDispatch>();

  // Get encoded state excluding _persist
  const code = useSelector((state: RootState) =>
    encode(omit(state, '_persist'))
  );

  const lastSynced = useSelector(
    (state: RootState) => state.sync.lastSynced || 'Never'
  );

  const [localCode, setLocalCode] = useState<string>('');

  const handleSync = useCallback(() => {
    if (localCode.trim()) {
      dispatch(syncActions.syncAccount(localCode));
      setLocalCode(''); // optional: clear input after syncing
    }
  }, [dispatch, localCode]);

  const navigate = useNavigate();

  return (
    <Fullscreen title="Sync Your Balance" onRequestClose={() => navigate(-1)}>
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
