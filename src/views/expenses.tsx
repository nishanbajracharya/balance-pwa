import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { isToday, subDays, isBefore, isSameDay, isYesterday } from 'date-fns';

import ExpenseItem from '../components/listItem';
import Fullscreen from '../components/fullscreen';
import type { RootState } from '../store';
import type { ExpenseItem as ReduxExpenseItem } from '../reducers/expense';

const DAY = {
  today: 'Today',
  yesterday: 'Yesterday',
  twoDaysAgo: 'Two Days Ago',
  before: 'Before',
} as const;

export type ExpenseListProps = {
  title: string;
  list: string[];
  data: Record<string, ReduxExpenseItem>;
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

    const today = list.filter((id) => isToday(new Date(data[id].addedDate)));
    const yesterday = list.filter((id) =>
      isYesterday(new Date(data[id].addedDate))
    );
    const twoDaysAgo = list.filter((id) =>
      isSameDay(new Date(data[id].addedDate), twoDays)
    );
    const before = list.filter((id) =>
      isBefore(new Date(data[id].addedDate), threeDays)
    );

    const sortedData = { today, yesterday, twoDaysAgo, before };

    const sortedList = (
      ['today', 'yesterday', 'twoDaysAgo', 'before'] as const
    ).filter((key) => sortedData[key].length);

    return { ...sortedData, list: sortedList };
  }, [data, list]);

  return (
    <Fullscreen onRequestClose={() => history.goBack()} title="Expense">
      <div className="scroll-content">
        {segments.list.map((day) => (
          <ExpenseList
            key={day}
            title={DAY[day]}
            list={segments[day]}
            data={data}
          />
        ))}
      </div>
    </Fullscreen>
  );
}
