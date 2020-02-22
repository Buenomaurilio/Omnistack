import axios from  'axios';

const api = axios.create({
    baseURL: 'http://10.255.20.231:3333',
});

export default api;