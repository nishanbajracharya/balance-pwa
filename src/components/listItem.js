import React from 'react';
import numeral from 'numeral';

const ExpenseItem = ({
  title = '',
  value = ''
}) => <li className="expense-item">
  <span className="expense-title">{title}</span>
  <span className="expense-value">Rs {numeral(value).format('0,0')}</span>
</li>;

export default ExpenseItem;
