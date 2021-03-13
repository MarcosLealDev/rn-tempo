import axios from 'axios';

// https://api.hgbrasil.com/weather?key=5429ee00&lat=-23.682&lon=-46.875


export const key = '5429ee00';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;

