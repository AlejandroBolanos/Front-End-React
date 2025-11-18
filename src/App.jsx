import { useEffect, useState } from 'react';
import api from '../services/api';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/test')
      .then(response => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Cargando...</h1>
          <p className="text-gray-600 mt-2">Esperando respuesta del servidor</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-500">
          <h1 className="text-2xl font-bold text-red-600">Error de conexión</h1>
          <p className="text-gray-700 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-6xl">✅</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            ¡Conexión exitosa!
          </h1>
          <p className="text-lg text-gray-600 mb-4">{message}</p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            React + Laravel funcionando correctamente
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;