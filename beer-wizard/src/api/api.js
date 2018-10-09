const axios = require('axios');

export const get = (path, payload) => {
    return axios.get('http://localhost:8332/api/' + path, {
        params: payload,
    })
}

export const post = (path, payload) => {
    return axios.post('http://localhost:8332/api/' + path, payload)
}

export const isOK = (response) => {
    return response.status === 200
}
