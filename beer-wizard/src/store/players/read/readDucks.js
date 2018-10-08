import {dispatch} from 'redux';

var defaultState = {
    data: {name: 'test'},
    status: 'Ok'
}

var reducer = () => (rootState=defaultState, dispatch) => {
    return rootState;
}

export default reducer;
