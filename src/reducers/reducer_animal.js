import {FETCH_ANIMAL} from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ANIMAL:
      const animal = action.payload.data;
      let nextState = {...state};
      nextState[animal.id] = animal;
      return nextState;
    default:
      return state;
  }
}
