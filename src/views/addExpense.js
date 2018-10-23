import React from 'react';
import { connect } from 'react-redux';

import Input from '../components/input';
import Button from '../components/button';
import Fullscreen from '../components/fullscreen';
import * as expenseActions from '../actions/expense';

class AddExpense extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      value: 0,
      title: undefined
    };
  }

  handleAddExpense = (value, title) => {
    value && this.props.addExpense(value, title);

    this.fs.handleClose();
  }

  render() {
    return <Fullscreen ref={c => this.fs = c} onRequestClose={() => this.props.history.goBack()} title="Add Expense">
      <div className="input-container">
        <p className="input-container-title">Add what you spent on and your expenses.</p>
        <Input type="number" placeholder="How much did you spend?" onValueChange={value => this.setState({ value: parseInt(value) })} />
        <Input placeholder="What did you spend on?" onValueChange={title => this.setState({ title })} />
      </div>
      <div className="button-container">
        <Button
          primary
          label="Submit"
          onClick={() => this.handleAddExpense(this.state.value, this.state.title)}
        />
        <Button
          secondary
          label="Cancel"
          onClick={() => this.fs.handleClose()}
        />
      </div>
    </Fullscreen>;
  }
}

export default connect(state => ({
  balance: state.balance
}),
dispatch => ({
  addExpense: (value, title) => dispatch(expenseActions.addExpense(value, title))
}))(AddExpense);
