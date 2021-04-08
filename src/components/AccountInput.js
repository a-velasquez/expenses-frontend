import React from "react";
class AccountInput extends React.Component {
  
  // local state
  state = {name: '', balance: ''}

  render() {
    return (
      <div>
        <form>
          <label>Checking Account Name:</label>
          <input type="text" placeholder="Name" value={this.state.name}/><br/>
          <label>Checking Account Balance:</label>
          <input type="text" placeholder="Balance" value={this.state.balance}/>
        </form>
      </div>
    )
  }
}

export default AccountInput;