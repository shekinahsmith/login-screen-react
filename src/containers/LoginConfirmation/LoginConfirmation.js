import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Logo from "../../components/UI/Logo/Logo";

import classes from "./LoginConfirmation.scss";

class LogInConfirmation extends Component {
  render() {
    let loginConfirmation = <Redirect to="/" />;

    if (this.props.userEmail !== null && this.props.userCompanyId !== null) {
      loginConfirmation = (
        <main className={classes.Confirmation}>
          <Logo />
          <p className={classes.ConfirmationMessage}>
            Welcome {this.props.userEmail}, from {this.props.userCompanyId}
          </p>
        </main>
      );
    }
    return loginConfirmation;
  }
}

const mapStateToProps = state => {
  return {
    userEmail: state.existingUserData.email,
    userCompanyId: state.existingUserData.companyId
  };
};

export default connect(mapStateToProps)(LogInConfirmation);
