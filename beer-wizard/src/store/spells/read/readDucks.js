import api from '../../../api';

// Actions
const loadSpells = () => ({
    type: 'UPDATE_SPELLS'
})

export const setSpells = (spells) => ({
    type: 'SET_SPELLS',
    payload: spells
})

// reducer
const defaultState = {
    data: {name: 'test'},
    status: 'OK'
}

var reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_SPELLS':
            return {
                status: 'UPDATING',
            }
        case 'SET_SPELLS':
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
export const getAllSpells = () => dispatch => {
    dispatch(loadSpells())
    api.get('get_all_spells').then(response => {
        if (api.isOK(response)) {
            dispatch(setSpells(response.data))
        }
    })
}
