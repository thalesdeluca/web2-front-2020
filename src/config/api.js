import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("@song-search");

  if(token) {
    config.headers['Authorization'] = token;
  }
  return config;
})

export default api;