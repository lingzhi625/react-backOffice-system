import axios from './axios'
class Api {
    get(url, params) {
        return axios.get(url, {
            params: params
        })
    }
    post(url, params) {
        return axios.post(url, params)
    }
}

export default Api