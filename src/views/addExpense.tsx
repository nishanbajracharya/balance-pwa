import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../components/input';
import Button from '../components/button';
import Fullscreen, { FullscreenHandle } from '../components/fullscreen';
import * as expenseActions from '../actions/expense';
import type { AppDispatch } from '../store';

export default function AddExpense() {
  const dispatch = useDispatch<AppDispatch>();
  const fsRef = useRef<FullscreenHandle>(null);

  const [value, setValue] = useState(0);
  const [title, setTitle] = useState('');

  const handleAddExpense = () => {
    if (value > 0 && title) {
      dispatch(expenseActions.addExpense(value, title));
    }
    fsRef.current?.handleClose();
  };

  const navigate = useNavigate();

  return (
    <Fullscreen
      ref={fsRef}
      onRequestClose={() => navigate(-1)}
      title="Add Expense"
    >
      <div className="input-container">
        <p className="input-container-title">
          Add what you spent on and your expenses.
        </p>

        <Input
          type="number"
          placeholder="How much did you spend?"
          onValueChange={(v: string) => setValue(Math.abs(parseFloat(v) || 0))}
        />

        <Input
          placeholder="What did you spend on?"
          onValueChange={(t: string) => setTitle(t)}
        />
      </div>

      <div className="button-container">
        <Button primary label="Submit" onClick={handleAddExpense} />
        <Button
          secondary
          label="Cancel"
          onClick={() => fsRef.current?.handleClose()}
        />
      </div>
    </Fullscreen>
  );
}
