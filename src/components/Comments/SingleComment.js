import React, { Component } from 'react';

export default class SingleComment extends Component {

  render() {
    return (
      <div className='comment-item'>
        <div className='text'>{this.props.data.text}</div>
        <div className='controls-bar'>
          <button className='report' onClick = { () => this.props.startCommentModalHandler(this.props.data.id, 'Comment') }>Flag</button>
        </div>
      </div>
    );
  }
}
