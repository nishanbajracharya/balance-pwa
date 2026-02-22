import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import BalanceItem from '../components/listItem';
import * as balanceActions from '../actions/balance';
import type { RootState, AppDispatch } from '../store';
import Fullscreen, { FullscreenHandle } from '../components/fullscreen';

export default function AddBalance() {
  const dispatch = useDispatch<AppDispatch>();
  const balance = useSelector((state: RootState) => state.balance.current);

  const [value, setValue] = useState(0);
  const fsRef = useRef<FullscreenHandle>(null);

  const handleAddBalance = () => {
    if (value > 0) {
      dispatch(balanceActions.addBalance(value));
    }
    fsRef.current?.handleClose();
  };

  const navigate = useNavigate();

  return (
    <Fullscreen
      ref={fsRef}
      onRequestClose={() => navigate(-1)}
      title="Add Balance"
    >
      <div className="input-container">
        <p className="input-container-title">
          Add some amount to your current balance.
        </p>

        <Input
          type="number"
          placeholder="How much do you want to add?"
          onValueChange={(v: string) => setValue(Math.abs(parseFloat(v) || 0))}
        />

        <BalanceItem title="Current Balance" value={balance} />
        <BalanceItem title="New Balance" value={balance + value} />
      </div>

      <div className="button-container">
        <Button primary label="Submit" onClick={handleAddBalance} />
        <Button
          secondary
          label="Cancel"
          onClick={() => fsRef.current?.handleClose()}
        />
      </div>
    </Fullscreen>
  );
}
