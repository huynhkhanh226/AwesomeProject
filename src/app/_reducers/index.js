import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

export const staticReduces = {
  counter: counterReducer,
};

const reducers = asyncReducers =>
  combineReducers({
    counter: counterReducer,
    ...asyncReducers,
  });

export default reducers;
