import axios from 'axios';

const getToken = () => localStorage.getItem('user').token;

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use((req) => {
  if (req.url === '/user/login' || req.url === '/user/register') return req;
  req.headers.authorization = getToken();
  return req;
});

export const createSession = async (email, password) => (
  api.post('/user/login', { email, password })
);
