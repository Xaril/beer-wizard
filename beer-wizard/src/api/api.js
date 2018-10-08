const axios = require('axios');

export const get = (path) => {
    console.log("in get")
    return axios.get('http://localhost:8332/api/' + path)
}

export const isOK = (response) => {
    return response.status === 200
}
