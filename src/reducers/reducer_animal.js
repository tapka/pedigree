import {FETCH_ANIMAL, FETCH_ANIMAL_FIRST} from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ANIMAL_FIRST:
      const animal2 = action.payload.data;
      let newState2 = {...state};
      newState2.active = animal2.id;
      newState2[animal2.id] = animal2;
      return newState2;
    case FETCH_ANIMAL:
      const animal = action.payload.data;
      let newState = {...state};
      newState[animal.id] = animal;
      return newState;
    default:
      return state;
  }
}
