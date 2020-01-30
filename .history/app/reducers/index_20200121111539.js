import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

const reducers = asyncReducers =>
  combineReducers({
    counter:counterReducer
    ...asyncReducers
  });

export default reducers;