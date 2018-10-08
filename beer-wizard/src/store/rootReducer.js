/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import PlayersReducer from './players';
import SpellsReducer from './spells';


export default combineReducers({
 spells: SpellsReducer,
 players: PlayersReducer,
});
