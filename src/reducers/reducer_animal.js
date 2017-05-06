import {FETCH_ANIMAL} from '../actions/index';

const INITIAL_STATE = {
  animal: null
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ANIMAL:
      return {...state, animal: action.payload.data}
    default:
      return state;
  }
}
