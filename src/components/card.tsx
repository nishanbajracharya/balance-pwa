import numeral from 'numeral';
import classnames from 'classnames';

export type CardProps = {
  value?: number;
  className?: string;
  title?: string;
};

export default function Card({
  value = 0,
  className = '',
  title = 'Balance',
}: CardProps) {
  return (
    <div className={classnames('card', className)}>
      <p className="card-title">{title}</p>
      <p className="card-value">Rs {numeral(value).format('0,0')}</p>
    </div>
  );
}
