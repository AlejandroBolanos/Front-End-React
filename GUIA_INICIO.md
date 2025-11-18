# Guía de Inicio Rápido

## Estructura Creada

Tu proyecto ahora cuenta con una estructura profesional y escalable:

### Carpetas Principales

```
src/
├── components/
│   ├── common/          # Componentes compartidos (Loading)
│   └── ui/              # Componentes UI (Card, Button, Input)
├── layouts/             # MainLayout con menú de navegación
├── pages/               # Vistas (Home, Dashboard, About)
├── routes/              # Configuración de rutas
├── services/            # API y servicios
├── hooks/               # Custom hooks (useFetch, useLocalStorage)
├── utils/               # Utilidades (formatters, validators)
└── constants/           # Constantes de configuración
```

## Características Incluidas

### Sistema de Rutas
- React Router DOM configurado
- 3 páginas de ejemplo: Home, Dashboard, About
- Layout compartido con navegación responsive

### Componentes Reutilizables
- **Card**: Tarjetas con estilos consistentes
- **Button**: Botones con variantes (primary, secondary, outline, danger)
- **Input**: Campos de entrada con validación
- **Loading**: Spinner de carga

### Custom Hooks
- **useFetch**: Para peticiones HTTP simplificadas
- **useLocalStorage**: Persistencia en localStorage

### Utilidades
- **formatters**: Formateo de monedas, fechas, textos
- **validators**: Validación de emails, campos requeridos, etc.

### Layout con Menú
- Navegación desktop y mobile
- Header con logo
- Footer
- Diseño responsive

## Cómo Usar

### 1. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5174` (o el puerto que te indique)

### 2. Navegar por las Páginas

El menú superior te permite navegar entre:
- **Inicio**: Página principal con test de conexión al backend
- **Dashboard**: Panel con estadísticas de ejemplo
- **Acerca de**: Información del proyecto

### 3. Crear una Nueva Página

**Paso 1**: Crea el componente de la página

```jsx
// src/pages/MiNuevaPagina.jsx
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function MiNuevaPagina() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Mi Nueva Página</h1>
      <Card>
        <p>Contenido de mi página</p>
        <Button variant="primary">Hacer algo</Button>
      </Card>
    </div>
  );
}

export default MiNuevaPagina;
```

**Paso 2**: Agrega la ruta

```jsx
// src/routes/index.jsx
import MiNuevaPagina from '../pages/MiNuevaPagina';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // ... rutas existentes
      {
        path: 'mi-nueva-pagina',
        element: <MiNuevaPagina />,
      },
    ],
  },
]);
```

**Paso 3**: Agrega al menú (opcional)

```jsx
// src/layouts/MainLayout.jsx
const navItems = [
  // ... items existentes
  { name: 'Mi Página', path: '/mi-nueva-pagina' },
];
```

### 4. Usar Componentes Reutilizables

```jsx
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

function MiComponente() {
  const [nombre, setNombre] = useState('');

  return (
    <Card>
      <Input
        label="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <Button variant="primary" onClick={() => alert(nombre)}>
        Saludar
      </Button>
    </Card>
  );
}
```

### 5. Hacer Peticiones a la API

**Opción 1: Usando el hook useFetch**

```jsx
import useFetch from '../hooks/useFetch';
import Loading from '../components/common/Loading';

function MiComponente() {
  const { data, loading, error } = useFetch('/usuarios');

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.map(usuario => (
        <div key={usuario.id}>{usuario.nombre}</div>
      ))}
    </div>
  );
}
```

**Opción 2: Usando Axios directamente**

```jsx
import { useState, useEffect } from 'react';
import api from '../services/api';

function MiComponente() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    api.get('/endpoint')
      .then(response => setDatos(response.data))
      .catch(error => console.error(error));
  }, []);

  return <div>{/* Renderiza datos */}</div>;
}
```

### 6. Usar Custom Hooks

**useLocalStorage**

```jsx
import useLocalStorage from '../hooks/useLocalStorage';

function MiComponente() {
  const [usuario, setUsuario] = useLocalStorage('usuario', null);

  return (
    <Button onClick={() => setUsuario({ nombre: 'Juan' })}>
      Guardar Usuario
    </Button>
  );
}
```

### 7. Usar Utilidades

```jsx
import { formatCurrency, formatDate } from '../utils/formatters';
import { isValidEmail } from '../utils/validators';

function MiComponente() {
  const precio = formatCurrency(1234.56); // "$1,234.56"
  const fecha = formatDate(new Date()); // "18 de noviembre de 2025"
  const esValido = isValidEmail('test@example.com'); // true
}
```

## Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Crear build de producción
npm run preview      # Vista previa del build

# Calidad de código
npm run lint         # Ejecutar ESLint
```

## Siguiente Pasos

1. Personaliza los colores y estilos en Tailwind
2. Agrega autenticación si la necesitas
3. Crea más componentes reutilizables
4. Implementa gestión de estado global (Context API, Zustand, Redux)
5. Agrega tests con Vitest
6. Configura variables de entorno (.env)

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Úsalas en tu código:

```jsx
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## Recursos Adicionales

- [Documentación de React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Axios](https://axios-http.com)

## Estructura Detallada

Consulta el archivo [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) para información detallada sobre la organización del proyecto.
