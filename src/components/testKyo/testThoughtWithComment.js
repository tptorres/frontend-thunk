import React from 'react';
import TestThoughtPost from './testThoughtPost';

class TestThoughtWithComment extends React.Component{
    render(){

      return(
        <div>
        <p>-------thoughts with comment Start-----</p>
        {this.props.thoughts_.map((myThoughts, i) => <TestThoughtPost key = {i} inputPostId = {myThoughts.id} myProps = {myThoughts} {...this.props}/>)}
        
        <p>-------thoughts with comment End-----</p>

        </div>
      )
    }
  };

export default TestThoughtWithComment;

//        {this.props.thoughts_.map((thoughts, i) => <TestPostPreview key = {i} myProps = {this.props}/>)}
// console.log("In ",this.props.thoughts_[0]["id"]);
