import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ThoughtPreview extends Component {
    constructor (props) {
        super(props);

        this.state = {
            vote_state: "DEFAULT",
            vote_start: props.thoughts_.vote,
            vote_current: props.thoughts_.vote
        }
    }

    upvotePost = () => {
        axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/likes/post/' + this.props.thoughts_.post.id  + '/user/1', {})
        .then( (res) => {

            console.log(res);

        }).catch( (err) => {
            console.log("There was an error");
        });
    }

    setPostUpvote = (e) => {
        e.preventDefault();

        if (this.state.vote_state === "UP") {

            this.setState({
                vote_state: "DEFAULT",
                vote_current: this.state.vote_start
            });

            this.upvotePost();

            return

        }

        this.upvotePost();

        this.setState({
            vote_state: "UP",
            vote_current: this.state.vote_start + 1
        });
    }

    downvotePost = () => {
        axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/dislikes/post/' + this.props.thoughts_.post.id  + '/user/1', {})
        .then( (res) => {
            console.log(res);
        }).catch( (err) => {
            console.log("There was an error");
        });
    }

    setPostDownvote = (e) => {
        e.preventDefault();

        if (this.state.vote_state === "DOWN") {

            this.setState({
                vote_state: "DEFAULT",
                vote_current: this.state.vote_start
            });

            this.downvotePost();

            return;

        }

        this.downvotePost();

        this.setState({
            vote_state: "DOWN",
            vote_current: this.state.vote_start - 1
        })

        
    }

    render() {
      let myThought = this.props.thoughts_.post;
      let myComment = this.props.thoughts_.comment;
      // let myCount = this.props.thoughts_[this.props.index].count;
      let myTags = this.props.thoughts_.tag;

        return (
            <div className = "post-preview">
                <div className = "details-top">
                    <span className = "timestamp">
                        {this.props.thoughts_.post.createdAt}
                    </span>
                </div>

                <div className = "text">
                    {myThought.text}
                </div>

                <div className = "tags">
                { myTags.map((myTag, i) => <span key = {i}> #{myTags[i].tag} </span>)}
                </div>

                <div className = "controls-bottom">
                    <div className = "vote-wrapper">
                        <button 
                                onClick = { this.setPostUpvote } 
                                className = { (this.state.vote_state === "UP") ? "vote up active" : "vote up" }
                        >
                            Up
                        </button>

                        <span className = "votes">{ this.state.vote_current }</span>
                        
                        <button 
                            onClick = { this.setPostDownvote } 
                            className = { (this.state.vote_state === "DOWN") ? "vote down active" : "vote down" }
                        >
                                Down
                        </button>

                        <Link to = {`/thoughts/${myThought.id}`} className = "comment-wrapper">
                            <i className='fas fa-comments' />

                            <span className = "comment-text"> {myComment.length} </span>
                        </Link>
                    </div>
                    <button onClick={() => this.props.startModalHandler(myThought.id)} className='report'> <i className='fas fa-flag' /> </button>
                </div>
            </div>
        )
    }
}

//{this.props.myProps.hash_tag.map((myTag, i) => <span key = {i}>#{myTag} </span> )}
//<span className = "votes"> {this.props.comments_[this.props.myProps.id].length} </span>
