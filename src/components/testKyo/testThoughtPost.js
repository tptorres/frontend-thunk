import React from 'react';

class TestThoughtsPost extends React.Component{
    render(){
      let myUpVote = this.props.myProps.up_vote;
      let myDownVote = this.props.myProps.down_vote;
      return(
        <div>
        <br/>
        <p>----------This is TestPost.js Start----------</p>

        <p>id:{this.props.myProps.id}</p>
        <p>text:{this.props.myProps.text}</p>
        <p>upVote:{myUpVote}</p>
        <p>downVote:{myDownVote}</p>
        <p>reportCount:{this.props.myProps.report_count}</p>
        <p>VOTE: {myUpVote - myDownVote} </p>
        <p>Number of comments: {this.props.comments_[this.props.myProps.id].length}</p>
        <div>hshTag: {this.props.myProps.hash_tag.map((myTag, i) => <p key = {i}>#{myTag}</p>)}</div>
        <button onClick = {this.props.upVote.bind(null, this.props.inputPostId)}>upVote</button>
        <button onClick = {this.props.downVote.bind(null, this.props.inputPostId)}>downVote</button>
        <button>report</button>
        <button> post with comment </button>



        <p>----------This is TestPost.js End----------</p>
        <br/>
        </div>
      )
    }
  };

export default TestThoughtsPost;

//        {this.props.thoughts_.map((thoughts, i) => <TestPostPreview key = {i} myProps = {this.props}/>)}
// console.log("In ",this.props.thoughts_[0]["id"]);
