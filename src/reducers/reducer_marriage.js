import {FETCH_MARRIAGE} from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_MARRIAGE:
      return {...state, marriage: action.payload.data};
    default:
      return state;
  }
}
