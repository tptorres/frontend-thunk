import {combineReducers} from 'redux';
import thoughtsReducer from './thoughtsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({thoughtsReducer, commentsReducer});

export default rootReducer;
