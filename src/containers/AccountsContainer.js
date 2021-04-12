import React from "react";
import AccountInput from "../components/AccountInput";
import { Route, Switch } from "react-router-dom";
import Accounts from "../components/Accounts"
import { connect } from "react-redux";
import { fetchAccounts } from "../actions/fetchAccounts"
import Account from "../components/Account"
class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/accounts/new" component={AccountInput} />
          {/* accounts/new has to be first or else accounts/:id will render instead of accounts/new since :id is just a stand-in*/}
          <Route
            path="/accounts/:id"
            render={(routerProps) => (
              <Account {...routerProps} accounts={this.props.accounts} />
            )}
          />
          <Route
            path="/accounts"
            render={(routerProps) => (
              <Accounts {...routerProps} accounts={this.props.accounts} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer);

