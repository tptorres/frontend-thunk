import React, { Component } from 'react';

export default class Settings extends Component {
  constructor (props) {
    super(props);
    this.state = {
      distance_radius: 5
    }
  }

  incrementDistanceRadius = () => {
    this.setState({
      distance_radius: this.state.distance_radius + 5
    });
  }

  decrementDistanceRadius = () => {

    if (this.state.distance_radius === 0) {
      return;
    }

    if (this.state.distance_radius < 0) {
      this.setState({
        distance_radius: 0
      });
    }

    this.setState({
      distance_radius: this.state.distance_radius - 5
    });
  }

  // componentDidMount () {

  // }

  render() {
    return (
      <div className='settings-page content-page'>
        <div className='settings-page-content'>

          <div className = "distance-radius">
            <h1>Change Distance Radius (in Miles)</h1>
            <div className = "distance-radius-wrapper">
              <span className = "text">{ this.state.distance_radius }</span>
              <button onClick = { this.incrementDistanceRadius }><i className = "fa fa-plus"></i> Increase</button>
              <button onClick = { this.decrementDistanceRadius }><i className = "fa fa-minus"></i> Decrease</button>
            </div>
          </div>
          

          <button className='log-out-btn'>Log Out</button>
        </div>
      </div>
    );
  }
}
