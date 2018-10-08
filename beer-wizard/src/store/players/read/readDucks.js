import {dispatch} from 'redux';
import { combineReducers } from 'redux';

const defaultState = {
    data: {name: 'test'},
    status: 'Ok'
}

var reducer = (rootState=defaultState, dispatch) => {
    return rootState;
}

export default reducer;
