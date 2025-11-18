# Estructura del Proyecto React

Este documento describe la estructura de carpetas y archivos del proyecto.

## Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables
│   ├── common/         # Componentes comunes (Loading, etc.)
│   └── ui/             # Componentes de interfaz de usuario
│       ├── Card.jsx
│       ├── Button.jsx
│       └── Input.jsx
│
├── layouts/            # Layouts de la aplicación
│   └── MainLayout.jsx  # Layout principal con navegación
│
├── pages/              # Páginas/Vistas de la aplicación
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   └── About.jsx
│
├── routes/             # Configuración de rutas
│   └── index.jsx       # Definición de rutas con React Router
│
├── services/           # Servicios (API, autenticación, etc.)
│   └── api.js          # Configuración de Axios
│
├── hooks/              # Custom React Hooks
│   ├── useFetch.js     # Hook para peticiones HTTP
│   └── useLocalStorage.js  # Hook para localStorage
│
├── utils/              # Funciones utilitarias
│   ├── formatters.js   # Funciones de formateo
│   └── validators.js   # Funciones de validación
│
├── constants/          # Constantes y configuración
│   └── config.js       # Configuración general
│
├── assets/             # Recursos estáticos (imágenes, iconos, etc.)
│
├── App.jsx             # Componente raíz de la aplicación
├── main.jsx            # Punto de entrada de React
└── index.css           # Estilos globales
```

## Descripción de Carpetas

### `/components`
Componentes reutilizables organizados por tipo:
- **common/**: Componentes compartidos como Loading, ErrorBoundary, etc.
- **ui/**: Componentes de UI básicos como Button, Card, Input, etc.

### `/layouts`
Layouts que definen la estructura de las páginas. El MainLayout incluye:
- Header/Navbar con navegación
- Área de contenido principal (usa `<Outlet />` de React Router)
- Footer

### `/pages`
Vistas principales de la aplicación. Cada archivo representa una página completa:
- **Home.jsx**: Página de inicio con conexión a API
- **Dashboard.jsx**: Panel de control con estadísticas
- **About.jsx**: Información sobre el proyecto

### `/routes`
Configuración del sistema de rutas con React Router:
- Define todas las rutas de la aplicación
- Organiza rutas anidadas
- Maneja layouts por ruta

### `/services`
Servicios para comunicación con APIs y lógica de negocio:
- **api.js**: Cliente Axios configurado con baseURL e interceptores

### `/hooks`
Custom hooks reutilizables:
- **useFetch**: Para peticiones HTTP simplificadas
- **useLocalStorage**: Para persistencia en localStorage

### `/utils`
Funciones auxiliares y utilitarias:
- **formatters.js**: Formateo de fechas, monedas, textos
- **validators.js**: Validaciones de formularios

### `/constants`
Constantes y configuración de la aplicación:
- **config.js**: Variables de configuración, URLs, límites, mensajes

## Cómo Agregar Nuevas Funcionalidades

### Crear una Nueva Página
1. Crea un archivo en `/src/pages/MiPagina.jsx`
2. Agrega la ruta en `/src/routes/index.jsx`
3. Actualiza el menú en `/src/layouts/MainLayout.jsx`

### Crear un Nuevo Componente
1. **Componentes de UI**: Crea en `/src/components/ui/`
2. **Componentes comunes**: Crea en `/src/components/common/`
3. Exporta el componente con `export default`

### Agregar un Nuevo Hook
1. Crea el archivo en `/src/hooks/useMiHook.js`
2. Sigue el patrón de naming: `use + NombreDelHook`
3. Documenta los parámetros y valores de retorno

### Agregar Servicios API
1. Usa el cliente `api` de `/src/services/api.js`
2. O crea un nuevo servicio específico en la misma carpeta

## Tecnologías Utilizadas

- **React 19**: Librería principal
- **React Router DOM**: Sistema de rutas
- **Vite**: Build tool y dev server
- **Tailwind CSS**: Framework CSS utility-first
- **Axios**: Cliente HTTP para APIs
- **ESLint**: Linting y calidad de código

## Scripts Disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Construye la aplicación para producción
npm run preview   # Vista previa de la build de producción
npm run lint      # Ejecuta el linter
```

## Buenas Prácticas

1. **Nombrado de archivos**: PascalCase para componentes (.jsx)
2. **Nombrado de funciones**: camelCase para utilities y hooks
3. **Imports**: Usa imports absolutos cuando sea posible
4. **Componentes**: Mantén componentes pequeños y enfocados
5. **Estado**: Usa hooks de React para manejo de estado local
6. **Estilos**: Usa clases de Tailwind para consistencia
