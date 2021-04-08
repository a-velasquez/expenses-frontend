import React from "react";
class AccountInput extends React.Component {

  render() {
    return (
      <div>
        <form>
          <label>Checking Account Name:</label>
          <input type="text" placeholder="Name"/><br/>
          <label>Checking Account Balance:</label>
          <input type="text" placeholder="Balance"/>
        </form>
      </div>
    )
  }
}

export default AccountInput;