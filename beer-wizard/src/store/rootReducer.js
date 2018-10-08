/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import PlayersReducer from './players';
import SpellsReducer from './spells';
import UserReducer from './user';


export default combineReducers({
 spells: SpellsReducer,
 players: PlayersReducer,
 user: UserReducer,
});
