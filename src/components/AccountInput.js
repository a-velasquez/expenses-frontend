import React from "react";
class AccountInput extends React.Component {
  
  // local state
  state = {
    name: '',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Checking Account Name:</label>
          <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/><br/>
          <label>Checking Account Balance:</label>
          <input type="text" placeholder="Balance" name="balance" onChange={this.handleChange} value={this.state.balance}/>
        </form>
      </div>
    )
  }
}

export default AccountInput;