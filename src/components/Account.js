import React from 'react';
import { Redirect } from 'react-router-dom'
import TransactionsContainer from '../containers/TransactionsContainer';

//functional component - just displaying info not updating state

const Account = (props) => {

  let account = props.accounts[props.match.params.id - 1]
  console.log(props)
  
  return (
    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
      <TransactionsContainer account={account}/>
    </div>  
  )
}

export default Account;   