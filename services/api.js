import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Usa 127.0.0.1 en lugar de localhost
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: false, // Cambia a false temporalmente
  timeout: 10000 // 10 segundos de timeout
});

// Interceptor para debug
api.interceptors.response.use(
  response => {
    console.log('✅ Respuesta exitosa:', response.data);
    return response;
  },
  error => {
    console.error('❌ Error en la petición:', error);
    console.error('❌ Error response:', error.response);
    console.error('❌ Error message:', error.message);
    return Promise.reject(error);
  }
);

export default api;