import React from 'react';
import { connect } from 'react-redux';
import isToday from 'date-fns/is_today';
import subDays from 'date-fns/sub_days';
import isBefore from 'date-fns/is_before';
import isSameDay from 'date-fns/is_same_day';
import isYesterday from 'date-fns/is_yesterday';

import ExpenseItem from '../components/listItem';
import Fullscreen from '../components/fullscreen';

const DAY = {
  today: 'Today',
  before: 'Before',
  yesterday: 'Yesterday',
  twoDaysAgo: 'Two Days Ago',
}

const ExpenseList = ({
  title,
  list,
  data
}) => <div className="expense-section-view">
  <p className="expense-section-title center">{title}</p>
  <ul>
    {
      list.map((id, key) => <ExpenseItem key={key} title={data[id].title} value={data[id].value}/>)
    }
  </ul>
</div>

const Expenses = ({
  data,
  history,
  segments
}) => <Fullscreen onRequestClose={() => history.goBack()} title="Expense">
  <div className="scroll-content">
  {
    segments.list.map((day, key) => <ExpenseList key={key} title={DAY[day]} list={segments[day]} data={data}/>)
  }
  </div>
</Fullscreen>;

export default connect(state => ({
  data: state.expense.data,
  segments: (() => {
    const data = state.expense.data;
    const list = state.expense.list;

    const twoDays = subDays(new Date(), 2);
    const threeDays = subDays(new Date(), 3);

    const today = list.filter(id => isToday(data[id].addedDate));
    const yesterday = list.filter(id => isYesterday(data[id].addedDate));
    const twoDaysAgo = list.filter(id => isSameDay(data[id].addedDate, twoDays));
    const before = list.filter(id => isBefore(data[id].addedDate, threeDays));

    const sortedData = {
      today,
      before,
      yesterday,
      twoDaysAgo,
    }

    const sortedList = ['today', 'yesterday', 'twoDaysAgo', 'before'].filter(key => sortedData[key].length);

    return {
      ...sortedData,
      list: sortedList,
    };
  })()
}))(Expenses);
