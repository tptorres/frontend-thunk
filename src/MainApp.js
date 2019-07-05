import React, { Component } from 'react';
import './scss/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoggedOutView from './components/layout/LoggedOutView';
import App from './components/App';
import axios from 'axios';

export default class MainApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount () {
    axios.get('https://thunk-api-19.herokuapp.com/api/v1/auth/google/me')
    .then ( (res) => {
      console.log(res);
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path = "/" component={LoggedOutView} />
            
            <div className = "logged-in-view">
              <Route component={ App } />
            </div>
          </Switch>
      </Router>
    );
  }
}
