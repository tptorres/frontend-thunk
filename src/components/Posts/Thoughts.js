import React, { Component } from 'react';
import ThoughtPreview from './ThoughtPreview';

export default class Thoughts extends Component {
  
  constructor (props) {
    super(props);
  }

  render() {
      
      return (
        <div className = "thoughts-list">
          { this.props.inputThoughts.map((myThoughts, i) =>
            <div className = "thought-item" key = {i}>
              <ThoughtPreview
                index = {i}
                thoughts_ = {myThoughts}
                startModalHandler = {this.props.startModalHandler}
              />
            </div>
          )}
        </div>
      )
  }
}
