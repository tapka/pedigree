import { combineReducers } from 'redux';
import AnimalReducer from './reducer_animal';

const rootReducer = combineReducers({
  animals: AnimalReducer,
});

export default rootReducer;
