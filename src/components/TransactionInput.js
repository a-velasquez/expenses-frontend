import React from 'react';
import TransactionsContainer from '../containers/TransactionsContainer';
import Transactions from '../components/Transactions';

class TransactionInput extends React.Component {
  render() {
    return (
      <div>
        Transaction Input
         <Transactions />
      </div>
    )
  }
}

export default TransactionInput;