import React from 'react';
import classnames from 'classnames';

const Card = ({
  value = 0,
  className = '',
  title = 'Balance',
}) => <div className={classnames('card', className)}>
  <p className="card-title">{title}</p>
  <p className="card-value">{value}</p>
</div>;

export default Card;
