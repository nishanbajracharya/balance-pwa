export const SYNC_ACCOUNT = 'SYNC_ACCOUNT' as const;
export const COPY_ACCOUNT_SIGNATURE = 'COPY_ACCOUNT_SIGNATURE' as const;

export interface SyncAccountAction {
  type: typeof SYNC_ACCOUNT;
  payload: {
    code: string;
  };
}

export interface CopyAccountSignatureAction {
  type: typeof COPY_ACCOUNT_SIGNATURE;
  payload: {
    code: string;
  };
}

export type SyncActions = SyncAccountAction | CopyAccountSignatureAction;

export const syncAccount = (code = ''): SyncAccountAction => ({
  type: SYNC_ACCOUNT,
  payload: { code },
});

export const copyAccountSignature = (
  code = ''
): CopyAccountSignatureAction => ({
  type: COPY_ACCOUNT_SIGNATURE,
  payload: { code },
});
