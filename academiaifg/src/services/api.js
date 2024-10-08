import axios from 'axios';
import useAuth from '../hooks/useAuth';

const api = axios.create({
  baseURL: 'http://localhost:http://localhost:8000/admin/login/?next=/admin/',  // URL do backend
});

api.interceptors.request.use(
  (config) => {
    const { token } = useAuth();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
