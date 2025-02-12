import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:  {
        accept: 'application/json',
        Authorization: 'Bearer 34b552bfaf20254c7e52718054ea4416'
      }
})

export default instance;