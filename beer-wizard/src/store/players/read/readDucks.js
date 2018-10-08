import api from '../../../api';

// Actions
const loadPlayers = () => ({
    type: 'UPDATE_PLAYERS'
})

export const setPlayers = (players) => ({
    type: 'SET_PLAYERS',
    payload: players
})

// reducer
const defaultState = {
    data: {name: 'test'},
    status: 'OK'
}

var reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_PLAYERS':
            return {
                status: 'UPDATING',
            }
        case 'SET_PLAYERS':
            return {
                status: 'OK',
                data: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;

// Thunks
export const getAllPlayers = () => dispatch => {
    dispatch(loadPlayers())
    api.get('get_all_players').then(response => {
        if (api.isOK(response)) {
            dispatch(setPlayers(response.data))
        }
    })
}
