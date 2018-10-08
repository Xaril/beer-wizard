import { combineReducers } from 'redux';
import readReducer from './read';

var reducer =  combineReducers({
 read: readReducer,
});

export default reducer;
