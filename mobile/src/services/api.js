import axios from  'axios';

const api = axios.create({
    baseURL: 'http://172.18.40.50:3333',
});

export default api;