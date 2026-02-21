import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import isToday from 'date-fns/isToday';
import subDays from 'date-fns/subDays';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import isYesterday from 'date-fns/isYesterday';

import ExpenseItem from '../components/listItem';
import Fullscreen from '../components/fullscreen';
import type { RootState } from '../store';

const DAY = {
  today: 'Today',
  before: 'Before',
  yesterday: 'Yesterday',
  twoDaysAgo: 'Two Days Ago',
} as const;

export type ExpenseListProps = {
  title: keyof typeof DAY;
  list: string[];
  data: {
    [id: string]: {
      value: string;
      title: keyof typeof DAY;
      addedDate: Date;
    };
  };
};

const ExpenseList = ({ title, list, data }: ExpenseListProps) => (
  <div className="expense-section-view">
    <p className="expense-section-title center">{title}</p>
    <ul>
      {list.map((id) => (
        <ExpenseItem key={id} title={data[id].title} value={data[id].value} />
      ))}
    </ul>
  </div>
);

type ExpensesProps = {
  history: {
    goBack: () => void;
  };
};

export default function Expenses({ history }: ExpensesProps) {
  const data = useSelector((state: RootState) => state.expense.data);
  const list = useSelector((state: RootState) => state.expense.list);

  const segments = useMemo(() => {
    const twoDays = subDays(new Date(), 2);
    const threeDays = subDays(new Date(), 3);

    const today = list.filter((id) => isToday(data[id].addedDate));
    const yesterday = list.filter((id) => isYesterday(data[id].addedDate));
    const twoDaysAgo = list.filter((id) =>
      isSameDay(data[id].addedDate, twoDays)
    );
    const before = list.filter((id) => isBefore(data[id].addedDate, threeDays));

    const sortedData = {
      today,
      before,
      yesterday,
      twoDaysAgo,
    };

    const sortedList = (
      ['today', 'yesterday', 'twoDaysAgo', 'before'] as const
    ).filter((key) => sortedData[key].length);

    return {
      ...sortedData,
      list: sortedList,
    };
  }, [data, list]);

  return (
    <Fullscreen onRequestClose={() => history.goBack()} title="Expense">
      <div className="scroll-content">
        {segments.list.map((day) => (
          <ExpenseList key={day} title={day} list={segments[day]} data={data} />
        ))}
      </div>
    </Fullscreen>
  );
}
