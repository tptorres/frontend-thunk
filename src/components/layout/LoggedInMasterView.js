import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../search/Search';
import HeaderComponent from './../partials/Header';
import Navbar from './../partials/Navbar';
import Settings from '../user/Account/Settings';
import Activity from '../user/Account/Activity';
import Home from '../Home';

export default class LoggedInMasterView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loc: {},
      timestamp: new Date().toLocaleTimeString()
    };

    this.fetchGeolocationData = this.fetchGeolocationData.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.fetchGeolocationData(pos_dat => {
        this.setState({
          loc: {
            long: pos_dat.coords.latitude,
            lat: pos_dat.coords.longitude
          },
          timestamp: new Date().toLocaleTimeString()
        });
      });
    }, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchGeolocationData(some_func) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          some_func(pos);
        },
        function() {
          console.log('Could not retrieve user location data');
        }
      );
    } else {
      // Browser doesn't support Geolocation
      console.log(
        'Your browser does not support location tracking. Please update or switch to a new browser.'
      );
    }
  }

  render() {

      return (

        <div className = "logged-in-view">
            <p>This is LoggedInMasterView</p>

            <HeaderComponent />

            <div className = "page-content">
              <Switch>
                <Route path='/search' component={Search} />
                <Route path = "/activity" component = { Activity } />
                <Route path = "/settings" component = { Settings } />
                <Route path = "/" component = { Home } />
              </Switch>
            </div>

            <Navbar />

        <div className='page-content'>
          <Switch>
            <Route path='/search' component={Search} />
            <Route path='/activity' component={Activity} />
            <Route path='/settings' component={Settings} />
            <Route path='/' component={Home} />
          </Switch>
        </div>

        <Navbar />
      </div>
    );
  }
}
