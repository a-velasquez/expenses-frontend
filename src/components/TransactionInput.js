import React from 'react';
import { connect } from 'react-redux'; 


class TransactionInput extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Transaction Type:</label>
          <select>
            <option>deposit</option>
            <option>withdraw</option>
          </select><br/>
          <label>Transaction Amount:</label>
          <input type='text' name='amount' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default TransactionInput;