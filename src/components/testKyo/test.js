import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import *as actionCreators from '../../actions/ActionCreators';
import TestMain from './testMain';

function mapStateToProps(state)
{
  console.log(state);
  return{
    thoughts_: state.thoughtsReducer,
    comments_: state.commentsReducer,
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators(actionCreators, dispatch);
}

const Test = connect (mapStateToProps, mapDispatchToProps)(TestMain);

export default Test;
// import React from 'react';
// import {render} from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';
// import {Provider} from 'react-redux';
// import store, {history} from '../../store';
//
//
// function test() {
//   return (
//     <div >
//
//         <p>
//           Inside of test2
//         </p>
//
//     </div>
//   );
// }
//
// export default test;
