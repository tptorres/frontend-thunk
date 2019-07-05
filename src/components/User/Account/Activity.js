import React, { Component, Fragment } from 'react';
import Thoughts from '../../Posts/Thoughts';
import axios from 'axios';
import CommentList from '../../Comments/CommentList';


export default class Activity extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
      result : "",
      getUserThought : "https://thunk-api-19.herokuapp.com/api/v1/thought/user/",
      getUserComment :"https://thunk-api-19.herokuapp.com/api/v1/comment/user/",
      myThought_: [],
      myComment_: [],
      userId_: 1,
      view: 'POSTS',
    };
    this.changeActivityView = this.changeActivityView.bind(this);

  }
  changeActivityView(ACTIVITY_VIEW) {
      this.setState({
        view: ACTIVITY_VIEW
      });
    }

  fetchThoughtData = ()=>
  {
    axios.get(this.state.getUserThought+this.state.userId_).then(response =>
    {
      const result = response.data
      this.setState({myThought_: result});
    }).catch(err => console.log(err), this.setState({result: "Not Found"}));

    axios.get(this.state.getUserComment+this.state.userId_).then(response =>
    {
      const result = response.data
      this.setState({myComment_: result});
    }).catch(err => console.log(err), this.setState({result: "Not Found"}));

  }
  componentDidMount()
  {
    this.fetchThoughtData();
  }


  render() {
    return (
      <div className='activity-page content-page'>
        <div className='tab-wrapper'>
          <button
            className='thoughts-btn'
            onClick={this.changeActivityView.bind(this, 'POSTS')}
          >
            Thoughts
          </button>
          <button
            className='comments-btn'
            onClick={this.changeActivityView.bind(this, 'COMMENTS')}
          >
            Comments
          </button>
        </div>
        <div className='test'>
        {this.state.view === 'POSTS' ? (
          <Fragment><Thoughts inputThoughts = {this.state.myThought_}/></Fragment>
        ) : (
          <Fragment><CommentList commentList = {this.state.myComment_}/></Fragment>
        )}
        </div>
      </div>
    );
  }
}
// {this.state.myComment_.map((mC,i) = > <Comments myComment ={mC}/>)}
// {this.state.view === 'POSTS' ? (
//   <Fragment>{this.props.children}</Fragment>
// ) : (
//   <ThoughtPreview inputThoughts = {this.props.thoughts_}/>
// )}
