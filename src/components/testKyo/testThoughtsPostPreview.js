import React from 'react';
import TestThoughtPost from './testThoughtPost';


class TestThoughtsPostPreview extends React.Component{
    render(){
      console.log("testPostPreview", this.props);

      return(
        <div className = "post-preview">

        </div>
      )
    }
  };

export default TestThoughtsPostPreview;

//        {this.props.thoughts_.map((thoughts, i) => <TestPostPreview key = {i} myProps = {this.props}/>)}
// console.log("In ",this.props.thoughts_[0]["id"]);
