import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';

const Card = ({
  value = 0,
  className = '',
  title = 'Balance',
}) => <div className={classnames('card', className)}>
  <p className="card-title">{title}</p>
  <p className="card-value">Rs {numeral(value).format('0,0')}</p>
</div>;

export default Card;
