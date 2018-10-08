/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import PlayersReducer from './players';

var simpleReducer = (state = {}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
     ...state,
    result: action.payload
   }
  default:
   return state
 }
}

export default combineReducers({
 simpleReducer: simpleReducer,
 players: PlayersReducer,
});
