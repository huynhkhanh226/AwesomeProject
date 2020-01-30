import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import counterReducer1 from './counterReducer1';

export default combineReducers({
  counter:counterReducer,
  counter1:counterReducer1
});