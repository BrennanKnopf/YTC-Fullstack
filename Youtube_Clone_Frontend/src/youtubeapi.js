import axios from 'axios'
import keys from './API_Key.json'
const KEY = keys;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})

