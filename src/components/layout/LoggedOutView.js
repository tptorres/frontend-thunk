import React, { Component } from 'react';
import LogoImg from './../../images/logo.png';

class LogInForm extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='log-in-form form'>
        <a
          className='login-btn'
          href='https://thunk-api-19.herokuapp.com/api/v1/auth/google'
        >
          Log In With Google
        </a>
      </div>
    );
  }
}

export default class LoggedOutView extends Component {
  render() {
    return (
      <div className='logged-out-layout'>
        <div className='logged-out-inner'>
          <img alt = "Thunk Logo" src = { LogoImg } />
          <h1>Get Started</h1>

          <div>
            <LogInForm />
          </div>
        </div>
      </div>
    );
  }
}
