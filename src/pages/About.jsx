import Card from '../components/ui/Card';

function About() {
  const features = [
    {
      title: 'React 19',
      description: 'La última versión de React con todas sus características modernas.',
      icon: '⚛️',
    },
    {
      title: 'Vite',
      description: 'Build tool ultrarrápido para un desarrollo ágil.',
      icon: '⚡',
    },
    {
      title: 'Tailwind CSS',
      description: 'Framework CSS utility-first para diseños personalizados.',
      icon: '🎨',
    },
    {
      title: 'React Router',
      description: 'Navegación declarativa para aplicaciones React.',
      icon: '🧭',
    },
    {
      title: 'Axios',
      description: 'Cliente HTTP para comunicación con APIs.',
      icon: '🌐',
    },
    {
      title: 'ESLint',
      description: 'Linting configurado para mantener código limpio.',
      icon: '✅',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Acerca de este Proyecto
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Un template profesional y escalable para tus proyectos React
        </p>
      </div>

      <Card className="bg-blue-50">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          ¿Qué incluye este template?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Este proyecto está configurado con las mejores prácticas de la industria,
          incluyendo una estructura de carpetas organizada, sistema de rutas,
          componentes reutilizables, integración con API, y más. Está listo para
          que comiences a desarrollar tu aplicación de inmediato.
        </p>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Tecnologías Incluidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-5xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Estructura del Proyecto
        </h2>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          <pre className="text-gray-800">
{`src/
├── components/       # Componentes reutilizables
│   ├── common/      # Componentes comunes
│   └── ui/          # Componentes de UI
├── layouts/         # Layouts de la aplicación
├── pages/           # Páginas/Vistas
├── routes/          # Configuración de rutas
├── services/        # Servicios (API, etc.)
├── hooks/           # Custom hooks
├── utils/           # Funciones utilitarias
└── constants/       # Constantes globales`}
          </pre>
        </div>
      </Card>
    </div>
  );
}

export default About;
