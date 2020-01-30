import {INCREASE, DECREASE} from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        initialState : state + 1
      };
    case DECREASE:
     return {
      initialState : state - 1
    };

    default:
      return state;
  }
}