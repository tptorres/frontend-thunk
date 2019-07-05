import React, { Component } from 'react';

export default class Comments extends Component {
  render() {
    return (
      <div>
        <p>{this.props.myComment.text}</p>
        <button>rep</button>
      </div>
    );
  }
}
