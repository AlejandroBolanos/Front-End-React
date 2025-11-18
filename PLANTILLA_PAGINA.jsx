/**
 * PLANTILLA DE PÁGINA
 *
 * Copia este archivo como base para crear nuevas páginas
 *
 * Pasos:
 * 1. Copia este archivo a src/pages/TuNuevaPagina.jsx
 * 2. Renombra la función principal
 * 3. Agrega la ruta en src/routes/index.jsx
 * 4. Opcionalmente, agrégala al menú en src/layouts/MainLayout.jsx
 */

import { useState, useEffect } from 'react';
import { Card, Button, Input, Alert } from '../components/ui';
import Loading from '../components/common/Loading';
import useFetch from '../hooks/useFetch';
import api from '../services/api';

function PlantillaPagina() {
  // Estados locales
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  // Custom hook para fetch (opcional)
  // const { data, loading, error, refetch } = useFetch('/tu-endpoint');

  // Efecto inicial (opcional)
  useEffect(() => {
    // Código que se ejecuta al montar el componente
    cargarDatos();
  }, []);

  // Función para cargar datos
  const cargarDatos = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tu-endpoint');
      console.log('Datos cargados:', response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Función de ejemplo para manejar acciones
  const handleAccion = async () => {
    try {
      setLoading(true);
      await api.post('/tu-endpoint', { data: 'ejemplo' });
      setMensaje({ tipo: 'success', texto: 'Acción completada exitosamente' });
      setLoading(false);
    } catch (err) {
      setMensaje({ tipo: 'error', texto: 'Error al completar la acción' });
      setLoading(false);
    }
  };

  // Renderizado condicional: Loading
  if (loading) {
    return <Loading message="Cargando datos..." />;
  }

  // Renderizado condicional: Error
  if (error) {
    return (
      <Alert variant="error" title="Error">
        {error}
      </Alert>
    );
  }

  // Renderizado principal
  return (
    <div className="space-y-6">
      {/* Encabezado de la página */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Título de tu Página
        </h1>
        <p className="mt-2 text-gray-600">
          Descripción breve de lo que hace esta página
        </p>
      </div>

      {/* Mensaje de alerta (si existe) */}
      {mensaje && (
        <Alert
          variant={mensaje.tipo}
          title={mensaje.tipo === 'success' ? 'Éxito' : 'Error'}
          onClose={() => setMensaje(null)}
        >
          {mensaje.texto}
        </Alert>
      )}

      {/* Sección 1: Tarjeta con formulario */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Sección de Formulario</h2>

        <div className="space-y-4">
          <Input
            label="Campo de ejemplo"
            placeholder="Ingresa un valor"
          />

          <div className="flex gap-2">
            <Button variant="primary" onClick={handleAccion}>
              Acción Principal
            </Button>
            <Button variant="secondary">
              Acción Secundaria
            </Button>
          </div>
        </div>
      </Card>

      {/* Sección 2: Grid de tarjetas */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Sección de Cards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <h3 className="text-lg font-semibold mb-2">
                Item {item}
              </h3>
              <p className="text-gray-600 mb-4">
                Descripción del item {item}
              </p>
              <Button variant="outline">Ver más</Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Sección 3: Tabla simple (opcional) */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Tabla de Datos</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Columna 1
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Columna 2
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Dato {row}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Valor {row}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button variant="outline" className="text-xs">
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Sección 4: Estadísticas (opcional) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: '1,234' },
          { label: 'Activos', value: '456' },
          { label: 'Pendientes', value: '78' },
          { label: 'Completados', value: '90' },
        ].map((stat, index) => (
          <Card key={index}>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PlantillaPagina;

/**
 * CÓMO AGREGAR ESTA PÁGINA AL PROYECTO:
 *
 * 1. En src/routes/index.jsx, agrega:
 *
 *    import TuNuevaPagina from '../pages/TuNuevaPagina';
 *
 *    Y dentro del array children:
 *    {
 *      path: 'tu-nueva-pagina',
 *      element: <TuNuevaPagina />,
 *    },
 *
 * 2. En src/layouts/MainLayout.jsx, agrega al array navItems:
 *
 *    { name: 'Tu Página', path: '/tu-nueva-pagina' },
 *
 * 3. Accede a la página en: http://localhost:5174/tu-nueva-pagina
 */
