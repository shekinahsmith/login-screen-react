import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Aux from './hoc/Aux/Aux';
import LogInScreen from './containers/LoginScreen/LoginScreen';
import LogInConfirmation from './containers/LoginConfirmation/LoginConfirmation';

class App extends Component {

  render() {

    return (
      <Aux>
        <Switch>
          <Route path="/login-confirmation" component={LogInConfirmation} />
          <Route path="/" component={LogInScreen} />
        </Switch>
      </Aux>
    );
  };
};

export default App;
