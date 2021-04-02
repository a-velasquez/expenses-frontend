import React from "react";
import AccountInput from "../components/AccountInput";
import Accounts from "../components/Accounts"
class AccountsContainer extends React.Component {


  render() {
    return (
      <div>
        <AccountInput />
        <Accounts/>
      </div>
    )
  }
}

export default AccountsContainer;

