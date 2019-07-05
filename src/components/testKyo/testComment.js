import React from 'react';

class TestComment extends React.Component{
    render(){

      return(
        <div>
        <p>this is single comment</p>
        </div>
      )
    }
  };

export default TestComment;

//        {this.props.thoughts_.map((thoughts, i) => <TestPostPreview key = {i} myProps = {this.props}/>)}
// console.log("In ",this.props.thoughts_[0]["id"]);
