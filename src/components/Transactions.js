import React from 'react';

const Transactions = (props) => {

  return (
    <div>
      {/* checks if transactions exist first then maps them instead of returning undefined props */}
      {props.transactions && props.transactions.map(
        transaction => <li key={transaction.id}>
          {transaction.kind} - {transaction.amount} posted - {transaction.date}
        </li>
      )}
    </div>
  )
}

export default Transactions;