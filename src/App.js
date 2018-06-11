import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';

import classes from  './App.scss';

import Logo from './assets/images/logo-login-screen.png';
import MessageIllustration from './assets/images/illustration.jpg';
import MessageUserIcon from './assets/images/message-user-icon.jpg';

console.log(classes);

class App extends Component {

  render() {
    return (
      <Aux>
        <main className={classes.LoginScreen}>

          <div className={classes.LoginScreenFormArea}>
            <div className={classes.Logo}><img src={Logo} alt="Logo" /></div>

            <div className={classes.LoginScreenFormWrapper}>
              <ul className={classes.FormToggle}>
                <li className={classes.active}>Sign Up</li>
                <li>Sign In</li>
              </ul>

              <form className={classes.Form}>
                <div className={classes.FormInputWrapper}>
                  <label className={classes.FormLabel}>Company name</label>
                  <input className={classes.FormTextInput} name="companyName" type="text" placeholder="Your Company Name..." />
                  <div className={classes.FormCompanyID}>Your database ID: <span className={classes.Highlighted}>some dynamic text</span></div>
                </div>

                <div className={classes.FormInputWrapper}>
                  <label className={classes.FormLabel}>Email</label>
                  <input className={classes.FormTextInput} name="email" type="email" placeholder="Your email..." />
                </div>

                <div className={classes.FormInputWrapper}>
                  <label className={classes.FormLabel}>Password</label>
                  <input className={classes.FormTextInput} name="password" type="text" placeholder="Your password..." />
                </div>

                <div className={classes.FormInputWrapper}>
                  <label className={classes.FormCheckBoxLabel}>
                    <input className={classes.FormCheckbox} type="checkbox" name="terms" value="terms" />
                    <span className={classes.FormCustomCheckBox}></span>
                    I accept the <a href="/#">terms and conditions</a>
                  </label>
                </div>

                <button className={classes.Button}>Sign In</button>
                <button className={classes.Button}>Sign Up</button>
                
                <p className={classes.FormLink}><a href="/#">Forgot Password?</a></p>
                <p className={classes.FormLink}><a href="/#">Haven't recieved confirmation e-mail?</a></p>
              </form>
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
      </Aux>
    );
  }
}

export default App;
