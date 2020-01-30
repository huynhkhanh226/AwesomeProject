import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const reducers = asyncReducers =>
  combineReducers({
    counterReducer
    ...asyncReducers
  });

export default reducers;