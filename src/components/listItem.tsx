import numeral from 'numeral';

export type ExpenseItemProps = {
  title?: string;
  value?: number;
};

export default function ExpenseItem({
  title = '',
  value = 0,
}: ExpenseItemProps) {
  return (
    <li className="expense-item">
      <span className="expense-title">{title}</span>
      <span className="expense-value">Rs {numeral(value).format('0,0')}</span>
    </li>
  );
}
