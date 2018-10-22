const INITIAL_STATE = {
  data: {
    1: {
      value: 750,
      title: 'Restaurant - Ginza',
      date: '2018-02-05T11:00:00Z'
    },
    2: {
      value: 1250,
      title: 'Shopping - Bhatbhateni',
      date: '2018-02-05T11:00:00Z'
    }
  },
  list: []
};

const expense = (state = INITIAL_STATE) => state;

export default expense;
