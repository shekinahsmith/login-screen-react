import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from  './LoginScreen.scss';

import MessageIllustration from '../../assets/images/illustration.jpg';
import MessageUserIcon from '../../assets/images/message-user-icon.jpg';

import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import Form from '../../components/Form/Form';

class LogInScreen extends Component {

    render () {
        return (
            <main className={classes.LoginScreen}>

            <div className={classes.LoginScreenFormArea}>
              <Logo />
  
              <div className={classes.LoginScreenFormWrapper}>
                <ul className={classes.FormToggle}>
                  <li onClick={() => this.props.onUserTypeSwitch(false)}>
                    <Button 
                      btnType="Toggle"
                      existingUser={!this.props.existingUser} />
                  </li>
                  <li onClick={() => this.props.onUserTypeSwitch(true)}>
                    <Button 
                      btnType="Toggle"
                      existingUser={this.props.existingUser} />
                  </li>
                </ul>
                
                <Form existingUser={this.props.existingUser} history={this.props.history} />
              </div>
  
              <p className={classes.LoginScreenFooter}>Copyright &copy; 2018 Recombee</p>
            </div>
  
            <div className={classes.LoginScreenMessageArea}>
              <div className={classes.LoginScreenMessageWrapper}>
                <h2 className={classes.MessageHeadline}><span>Artifical Intelligence Powered</span><span className={classes.Highlighted}>Recommender as a Service</span></h2>
  
                <div className={classes.MessageImage}><img src={MessageIllustration} alt="Artificial Intelligence Illustration" /></div>
  
                <p className={classes.Message}>"Recombee's recommendation solution is incredible. Our ecommerce platform can recommend products with much more intelligence for our customers. The support is also fantastic!"</p>
  
                <div className={classes.MessageCaption}>
                  <img className={classes.MessageCaptionImage} src={MessageUserIcon} alt="User Icon" />
                  <div className={classes.MessageCaptionText}>
                    <p>Nicholas Blicker Larson</p>
                    <p className={classes.MessageCaptionTitle}>CEO at <span className={classes.Highlighted}>Design Group</span></p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
    };
};

const mapStateToProps = state => {
  return {
    existingUser: state.isExistingUser
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onUserTypeSwitch: (bool) => dispatch(actions.checkExistingUser(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);