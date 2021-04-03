import React from "react";
import AccountInput from "../components/AccountInput";
import Accounts from "../components/Accounts"
import { connect } from "react-redux";
class AccountsContainer extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <AccountInput />
        <Accounts accounts={this.props.accounts}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(AccountsContainer);

