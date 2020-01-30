import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import counterReducer1 from './counterReducer1';

const reducers = asyncReducers =>
  combineReducers({
    counter:counterReducer,
    counter1:counterReducer1
    ...asyncReducers
  });

export default reducers;