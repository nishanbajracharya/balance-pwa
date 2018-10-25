export const SYNC_ACCOUNT = 'SYNC_ACCOUNT';
export const COPY_ACCOUNT_SIGNATURE = 'COPY_ACCOUNT_SIGNATURE';

export const syncAccount = (code = '') => ({
  type: SYNC_ACCOUNT,
  payload: { code }
});

export const copyAccountSignature = (code = '') => ({
  type: COPY_ACCOUNT_SIGNATURE,
  payload: { code }
});
