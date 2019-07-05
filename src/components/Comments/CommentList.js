import React, { Component } from 'react';
import SingleComment from './SingleComment';

export default class CommentList extends Component {
    render() {
        return (
            <div className = "comment-list">
                { this.props.commentList.map((c, i ) => {
                    return (

                        <SingleComment key = {c.id} data = { c } startCommentModalHandler = { this.props.startCommentModalHandler } />

                    )
                }) }
            </div>
        )
    }
}
