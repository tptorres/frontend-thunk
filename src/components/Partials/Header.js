import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import logoImg from './../../images/logo.png';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: props.location.pathname.slice(1)
    };
  }
  render() {
    let headerText = '';

    switch (this.props.location.pathname.slice(1)) {
      case 'posts':
        headerText = 'News Feed';
        break;
      case 'activity':
        headerText = 'My Activity';
        break;
      case 'search':
        headerText = 'Find Thoughts';
        break;
      default:
        headerText = '';
    }

    return (
      <header className='main-header'>
          <div className='header-inner'>
            <Link to='/home' className='logo-top'>
              <img alt = "logo-img" src = { logoImg } />
            </Link>
          </div>

          <h1 className = "page-name">{headerText}</h1>

        <Link to='/settings' className='user-settings'>
          <i className='fas fa-cog' />
          <p>Settings</p>
        </Link>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
