import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

debugger;
console.log(reducers);
const store = createStore(
    reducers
);

export default store;