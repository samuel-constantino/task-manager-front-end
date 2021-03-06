import axios from 'axios';

const { REACT_APP_ENV, REACT_APP_API, REACT_APP_LOCAL_API } = process.env;

const BASE_URL = REACT_APP_ENV === 'dev' ? REACT_APP_LOCAL_API : REACT_APP_API;

const getToken = () => JSON.parse(localStorage.getItem('user')).token;

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((req) => {
  if (req.url === '/login' || req.url === '/register') return req;
  req.headers.authorization = `Bearer ${getToken()}`;
  return req;
});

export const createSession = async (email, password) => (
  api.post('/login', { email, password })
);

export const registerUser = async (name, email, password) => (
  api.post('/register', { name, email, password })
);

export const getTasksByUser = async () => (
  api.get('/tasks')
);

export const getTaskById = async (id) => (
  api.get(`/tasks/${id}`)
);

export const addTask = async (newTask) => (
  api.post('/tasks', newTask)
);

export const removeTask = async (id) => (
  api.delete(`/tasks/${id}`)
);

export const editTask = async (task) => {
  const { id, name, description, status, priority } = task;
  return api.put(`/tasks/${id}`, { name, description, status, priority });
};
