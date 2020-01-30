import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import counterReducer1 from './counterReducer1';

export const staticReduces = {
  counter: counterReducer,
};

const reducers = asyncReducers =>
  combineReducers({
    counter: counterReducer,
    ...asyncReducers,
  });

export default reducers;
