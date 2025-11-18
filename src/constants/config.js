// Configuración general de la aplicación
export const APP_NAME = 'MiApp';
export const APP_VERSION = '1.0.0';

// URLs de API (se sobrescriben con variables de entorno si existen)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// Límites de paginación
export const ITEMS_PER_PAGE = 10;
export const MAX_ITEMS_PER_PAGE = 100;

// Tiempos de espera (en milisegundos)
export const REQUEST_TIMEOUT = 30000;
export const DEBOUNCE_DELAY = 300;

// Mensajes de error comunes
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Por favor, verifica tu conexión a internet.',
  SERVER_ERROR: 'Error del servidor. Por favor, intenta más tarde.',
  NOT_FOUND: 'El recurso solicitado no fue encontrado.',
  UNAUTHORIZED: 'No tienes autorización para realizar esta acción.',
  VALIDATION_ERROR: 'Por favor, verifica los datos ingresados.',
};
