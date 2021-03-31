import React from "react";
import { connect } from "react-redux"
import { fetchAccounts } from "./actions/fetchAccounts"

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({
      // synchronus request for testing
      type: 'FETCH_ACCOUNTS', payload:{name: 'Checking'}})
  }
  render() {
    return (
      <div className="App">
        Accounts Component
      </div>
    );
  }
}

export default connect(null, {fetchAccounts})(App);

