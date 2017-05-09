import { combineReducers } from 'redux';
import AnimalReducer from './reducer_animal';
import RandomAnimalReducer from './reducer_random_animal';
import MarriageReducer from './reducer_marriage';

const rootReducer = combineReducers({
  animals: AnimalReducer,
  marriage: MarriageReducer,
  randomAnimalState: RandomAnimalReducer,
});

export default rootReducer;
