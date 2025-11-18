import { useEffect, useState } from 'react';
import api from '../services/api';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function Home() {
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
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Error de conexión</h2>
        <p className="text-gray-700">{error}</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenido a tu Aplicación React
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Un template profesional con React, Vite y Tailwind CSS
        </p>
      </div>

      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-6xl">✅</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">¡Conexión exitosa!</h2>
          <p className="text-lg mb-4">{message}</p>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-3 rounded">
            React + Laravel funcionando correctamente
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Componentes Reutilizables
          </h3>
          <p className="text-gray-600 mb-4">
            Usa componentes UI pre-construidos para acelerar tu desarrollo.
          </p>
          <Button variant="primary">Ver Componentes</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Rutas Configuradas
          </h3>
          <p className="text-gray-600 mb-4">
            Sistema de rutas con React Router listo para usar.
          </p>
          <Button variant="secondary">Explorar</Button>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            API Integrada
          </h3>
          <p className="text-gray-600 mb-4">
            Axios configurado para comunicarse con tu backend.
          </p>
          <Button variant="outline">Documentación</Button>
        </Card>
      </div>
    </div>
  );
}

export default Home;
