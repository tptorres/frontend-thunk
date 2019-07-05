import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/ActionCreators';
import {getThoughts} from '../store'
import Main from './Main';

function mapStateToProps(state){
  return{
    thoughts_: state.thoughtsReducer,
    comments_: state.commentsReducer,
  }
}



function mapDispatchToProps(dispatch){
  return {...bindActionCreators(actionCreators, dispatch), getThoughts: () => dispatch(getThoughts())}
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
