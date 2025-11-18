import Card from '../components/ui/Card';

function Dashboard() {
  const stats = [
    { label: 'Usuarios', value: '1,234', change: '+12%', color: 'blue' },
    { label: 'Ventas', value: '$5,678', change: '+8%', color: 'green' },
    { label: 'Productos', value: '89', change: '-3%', color: 'yellow' },
    { label: 'Pedidos', value: '456', change: '+23%', color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Vista general de tu aplicación</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
              <div
                className={`flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${
                  stat.change.startsWith('+')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {stat.change}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Actividad Reciente
          </h3>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Nuevo evento #{item}
                  </span>
                </div>
                <span className="text-xs text-gray-500">Hace {item}h</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tareas Pendientes
          </h3>
          <div className="space-y-3">
            {[
              'Revisar reportes mensuales',
              'Actualizar base de datos',
              'Reunión con equipo',
              'Optimizar rendimiento',
            ].map((task, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{task}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
