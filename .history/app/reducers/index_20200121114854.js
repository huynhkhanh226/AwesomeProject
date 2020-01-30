import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import counterReducer1 from './counterReducer1';

export const staticReduces = {
   counter:counterReducer,
   counterReducer1,
   ...asyncReducers
};



const reducers = asyncReducers =>
  combineReducers(staticReduces);

export default reducers;