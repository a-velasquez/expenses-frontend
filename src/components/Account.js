import React from 'react';
import {Redirect} from 'react-router-dom'

//functional component - just displaying info not updating state

const Account = (props) => {

  let account = props.accounts[props.match.params.id - 1]
  console.log(props)
  
  return (
    <li>
      {account ? null : <Redirect to='/accounts'/>}
       {account ? account.name : null} - {account ? account.balance : null}
    </li>
  )
}

export default Account;