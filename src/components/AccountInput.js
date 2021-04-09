import React from "react";
import { connect } from "react-redux"
import { addAccount } from "../actions/addAccount"
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
    this.setState({
      name: "",
      balance: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking Account Name:</label>
          <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/><br/>
          <label>Checking Account Balance:</label>
          <input type="text" placeholder="Balance" name="balance" onChange={this.handleChange} value={this.state.balance} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addAccount})(AccountInput);