const INITIAL_STATE = {
  data: {
    1: {
      value: 750,
      title: 'Restaurant - Ginza',
      date: '2018-02-05T11:00:00Z'
    }
  },
  list: [1, 1, 1, 1, 1]
};

const expense = (state = INITIAL_STATE) => state;

export default expense;
