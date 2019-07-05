import React, { Component } from 'react';
import CommentList from './../Comments/CommentList';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class OneThought extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      inputTextHolder_: '',
      inputText_: '',
      inputMarkOwner_: true,
      inputUserId_: 1,

      thought_data: null,
      vote_state: "DEFAULT",
      vote_start: 0,
      vote_current: 0
    }
  }

    upvotePost = () => {
        axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/likes/post/' + this.state.thought_data.post.id  + '/user/1', {})
        .then( (res) => {

            console.log("Post upvoted");

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

            this.downvotePost();

            return;

        } else if (this.state.vote_state === "DOWN") {

            this.upvotePost();

        }

        this.upvotePost();

        this.setState({
            vote_state: "UP",
            vote_current: this.state.vote_start + 1
        });
    }

    downvotePost = () => {
        axios.post('https://thunk-api-19.herokuapp.com/api/v1/post/dislikes/post/' + this.state.thought_data.post.id  + '/user/1', {})
        .then( (res) => {
            console.log("Post downvoted");
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

            this.upvotePost();

            return;

        } else if (this.state.vote_state === "UP") {

            this.downvotePost();

        }

        this.downvotePost();

        this.setState({
            vote_state: "DOWN",
            vote_current: this.state.vote_start - 1
        })

    }

  getInputText = event => {
    this.setState({ inputTextHolder_: event.target.value });
  };

  btnSubmit = () => {
    this.setState(state => ({ inputText_: state.inputTextHolder_ }));
  };

  componentDidMount () {
    this._isMounted = true;
    // IMPLEMENT API BACKEND FUNCTIONALITY
    // console.log(this.props.match.params.id);
    axios.get('https://thunk-api-19.herokuapp.com/api/v1/thought/' + this.props.match.params.id)
      .then( (res) => {
        this.setState({
          thought_data: res.data,
          vote_start: res.data.vote,
          vote_current: res.data.vote
        });

        console.log(res.data);
      })
      .catch( (err) => {
        console.log("There was an error");
      });
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  render() {
    let myThought = this.state.thought_data;
    let myTags;
    let myComment;

    if (myThought === null || myTags === null || myComment === null) {
      return (<div>Loading Post</div>);
    }

    myTags = this.state.thought_data.tag;
    myComment = this.state.thought_data.comment;

    console.log(myThought.post.id);
    //let myComment; // if it has comment show, if it doesnt, throw error
   return (
      <div>
        <div className='post-preview'>
          <div className = "details-top">
              <span className = "timestamp">
                  {myThought.post.createdAt}
              </span>
          </div>

          <div className = "text">
              {myThought.post.text}
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

              <button onClick={() => this.props.startModalHandler(myThought.post.id)} className='report'> <i className='fas fa-flag' /> </button>


              <button
                className = "delete"
                onClick = { () => { this.props.deleteThought(myThought.post.id) } }
              >
                Delete
              </button>

          </div>
      </div>

    <div className='comments-wrapper'>
      <input
        type="text"
        value={this.state.inputTextHolder_}
        onChange={this.getInputText}
        placeholder='Share your thoughts about this post'
      />
      <button
        onClick={this.props.createComment.bind(
          null,
          this.state.thought_data.post.id,
          this.state.inputTextHolder_,
          this.state.inputMarkOwner_,
          this.state.inputUserId_
        )}
      >
        Post
      </button>
    </div>

    <CommentList commentList = { this.state.thought_data.comment } startCommentModalHandler = { this.props.startModalHandler } />
  </div>

    );
  }
}

export default withRouter(OneThought);
