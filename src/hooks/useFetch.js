import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook para hacer peticiones HTTP
 * @param {string} url - URL del endpoint
 * @param {object} options - Opciones para la petición
 * @returns {object} - { data, loading, error, refetch }
 */
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await api.get(url, options);
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
