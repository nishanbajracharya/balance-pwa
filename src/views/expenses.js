import React from 'react';
import { connect } from 'react-redux';
import isToday from 'date-fns/is_today';
import subDays from 'date-fns/sub_days';
import isBefore from 'date-fns/is_before';
import isSameDay from 'date-fns/is_same_day';
import isYesterday from 'date-fns/is_yesterday';

import Fullscreen from '../components/fullscreen';

const Expenses = ({
  history
}) => <Fullscreen onRequestClose={() => history.goBack()} title="Expense"></Fullscreen>;

export default connect(state => ({
  expense: state.expense,
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
