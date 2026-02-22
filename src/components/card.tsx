import classnames from 'classnames';

import { formatMoneyWithSymbol } from '../common/utils';

export type CardProps = {
  value?: number;
  className?: string;
  title?: string;
  isDarkModeEnabled?: boolean;
};

export default function Card({
  value = 0,
  className = '',
  title = 'Balance',
}: CardProps) {
  return (
    <div className={classnames('card', className)}>
      <p className="card-title">{title}</p>
      <p className="card-value">{formatMoneyWithSymbol(value)}</p>
    </div>
  );
}
