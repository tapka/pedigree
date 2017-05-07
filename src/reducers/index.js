import { combineReducers } from 'redux';
import AnimalReducer from './reducer_animal';
import MarriageReducer from './reducer_marriage';

const rootReducer = combineReducers({
  animals: AnimalReducer,
  marriage: MarriageReducer,
});

export default rootReducer;
