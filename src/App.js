import React from "react";
import { connect } from "react-redux"
import { fetchAccounts } from "./actions/fetchAccounts"
import AccountsContainer from "./containers/AccountsContainer"
class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({
      // synchronus request for testing
      type: 'FETCH_ACCOUNTS', payload:{name: 'Checking'}})
  }
  render() {
    return (
      <div className="App">
        <AccountsContainer />
      </div>
    );
  }
}

export default connect(null, {fetchAccounts})(App);

