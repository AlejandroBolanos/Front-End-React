# Frontend React - Proyecto Profesional

Aplicación React moderna con estructura profesional, sistema de rutas, componentes reutilizables y más.

## Características

- **React 19** - Última versión de React
- **React Router DOM** - Sistema de navegación completo
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Estilos utility-first
- **Axios** - Cliente HTTP configurado
- **ESLint** - Linting y calidad de código

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables (Card, Button, Input, Alert)
├── layouts/          # MainLayout con navegación
├── pages/            # Vistas (Home, Dashboard, About)
├── routes/           # Configuración de rutas
├── services/         # API y servicios
├── hooks/            # Custom hooks (useFetch, useLocalStorage)
├── utils/            # Utilidades (formatters, validators)
└── constants/        # Configuración global
```

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Documentación

- **[GUIA_INICIO.md](./GUIA_INICIO.md)** - Guía completa de inicio
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Estructura detallada
- **[EJEMPLOS.md](./EJEMPLOS.md)** - Ejemplos de código
- **[ESTRUCTURA_VISUAL.txt](./ESTRUCTURA_VISUAL.txt)** - Vista visual de la estructura
- **[PLANTILLA_PAGINA.jsx](./PLANTILLA_PAGINA.jsx)** - Plantilla para nuevas páginas

## Páginas Incluidas

- **/** - Página de inicio con test de conexión al backend
- **/dashboard** - Panel de control con estadísticas
- **/about** - Información sobre el proyecto

## Componentes UI Disponibles

- `Card` - Tarjetas contenedoras
- `Button` - Botones con variantes (primary, secondary, outline, danger)
- `Input` - Campos de entrada con validación
- `Alert` - Alertas y notificaciones
- `Loading` - Spinner de carga

## Custom Hooks

- `useFetch` - Peticiones HTTP simplificadas
- `useLocalStorage` - Persistencia en localStorage

## Scripts Disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción
npm run preview   # Vista previa del build
npm run lint      # Ejecutar linter
```

## Crear Nueva Página

1. Crea el archivo en `src/pages/MiPagina.jsx`
2. Agrega la ruta en `src/routes/index.jsx`
3. Actualiza el menú en `src/layouts/MainLayout.jsx`

Ver [GUIA_INICIO.md](./GUIA_INICIO.md) para más detalles.

## Tecnologías

- React 19
- React Router DOM 7
- Vite 7
- Tailwind CSS 4
- Axios 1.13
- ESLint 9
