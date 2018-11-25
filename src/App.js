import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import SignInForm from '../src/containers/SignInForm';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/signin'>
            <SignInForm
              header='Hello!'
              paragraph='Please sign in to continue'
              buttonLabel='Sign in'
              errorMessage='The email or password is not valid'
              emailPlaceholder='Email'
              emailValidationMessage='Email invalid'
              passwordPlaceholder='Password'
              passwordValidationMessage='Password invalid'
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
