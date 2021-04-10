import React from 'react';

//functional component - just displaying info not updating state

const Account = (props) => {
  
  return (
    <li>
       {props.account.name} - {props.account.balance}
    </li>
  )
}

export default Account;