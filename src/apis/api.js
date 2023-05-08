import Axios from '../config/http.js'

export function getData() {
    return Axios.post('testParams', { id: 1 });
}