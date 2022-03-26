import axios from 'axios';

const getToken = () => JSON.parse(localStorage.getItem('user')).token;

export const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use((req) => {
  if (req.url === '/login' || req.url === '/register') return req;
  req.headers.authorization = getToken();
  return req;
});

export const createSession = async (email, password) => (
  api.post('/login', { email, password })
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
