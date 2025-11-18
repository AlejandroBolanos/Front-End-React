# Ejemplos de Uso

Este archivo contiene ejemplos prácticos de cómo usar los componentes y utilidades del proyecto.

## Componentes UI

### Importación Simplificada

Gracias al archivo `src/components/ui/index.js`, puedes importar múltiples componentes en una línea:

```jsx
// En lugar de esto:
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

// Puedes hacer esto:
import { Card, Button, Input } from '../components/ui';
```

### Card (Tarjeta)

```jsx
import { Card } from '../components/ui';

function Ejemplo() {
  return (
    <Card className="mb-4">
      <h2 className="text-xl font-bold">Título</h2>
      <p>Contenido de la tarjeta</p>
    </Card>
  );
}
```

### Button (Botón)

```jsx
import { Button } from '../components/ui';

function Ejemplo() {
  return (
    <div className="space-x-2">
      <Button variant="primary" onClick={() => alert('Primary')}>
        Primary
      </Button>

      <Button variant="secondary" onClick={() => alert('Secondary')}>
        Secondary
      </Button>

      <Button variant="outline" onClick={() => alert('Outline')}>
        Outline
      </Button>

      <Button variant="danger" onClick={() => alert('Danger')}>
        Danger
      </Button>

      <Button disabled>Disabled</Button>
    </div>
  );
}
```

### Input (Campo de entrada)

```jsx
import { useState } from 'react';
import { Input, Button } from '../components/ui';

function FormularioEjemplo() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar y enviar
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Juan Pérez"
        error={errors.nombre}
      />

      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="juan@ejemplo.com"
        error={errors.email}
      />

      <Button type="submit" variant="primary">
        Enviar
      </Button>
    </form>
  );
}
```

### Alert (Alerta)

```jsx
import { useState } from 'react';
import { Alert, Button } from '../components/ui';

function AlertasEjemplo() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="space-y-4">
      <Alert variant="success" title="Éxito">
        La operación se completó correctamente.
      </Alert>

      <Alert variant="error" title="Error">
        Ocurrió un error al procesar tu solicitud.
      </Alert>

      <Alert variant="warning" title="Advertencia">
        Por favor verifica los datos antes de continuar.
      </Alert>

      <Alert variant="info">
        Esta es una alerta informativa sin título.
      </Alert>

      {showAlert && (
        <Alert
          variant="success"
          title="Alerta cerrable"
          onClose={() => setShowAlert(false)}
        >
          Puedes cerrar esta alerta haciendo clic en la X
        </Alert>
      )}
    </div>
  );
}
```

## Custom Hooks

### useFetch - Peticiones HTTP

```jsx
import useFetch from '../hooks/useFetch';
import { Card } from '../components/ui';
import Loading from '../components/common/Loading';

function ListaUsuarios() {
  const { data, loading, error, refetch } = useFetch('/usuarios');

  if (loading) return <Loading message="Cargando usuarios..." />;

  if (error) return (
    <Alert variant="error" title="Error">
      {error}
    </Alert>
  );

  return (
    <div>
      <Button onClick={refetch} className="mb-4">
        Recargar
      </Button>

      {data?.usuarios?.map(usuario => (
        <Card key={usuario.id} className="mb-2">
          <h3 className="font-semibold">{usuario.nombre}</h3>
          <p className="text-gray-600">{usuario.email}</p>
        </Card>
      ))}
    </div>
  );
}
```

### useLocalStorage - Persistencia local

```jsx
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Input, Button, Card } from '../components/ui';

function ConfiguracionUsuario() {
  const [preferencias, setPreferencias] = useLocalStorage('preferencias', {
    tema: 'claro',
    idioma: 'es',
  });

  const actualizarTema = (nuevoTema) => {
    setPreferencias({ ...preferencias, tema: nuevoTema });
  };

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Configuración</h2>

      <p className="mb-2">Tema actual: {preferencias.tema}</p>

      <div className="space-x-2">
        <Button
          variant={preferencias.tema === 'claro' ? 'primary' : 'outline'}
          onClick={() => actualizarTema('claro')}
        >
          Claro
        </Button>

        <Button
          variant={preferencias.tema === 'oscuro' ? 'primary' : 'outline'}
          onClick={() => actualizarTema('oscuro')}
        >
          Oscuro
        </Button>
      </div>
    </Card>
  );
}
```

## Utilidades

### Formatters - Formateo de datos

```jsx
import { formatCurrency, formatDate, truncateText } from '../utils/formatters';
import { Card } from '../components/ui';

function ProductoCard({ producto }) {
  return (
    <Card>
      <h3 className="font-bold text-lg">{producto.nombre}</h3>

      <p className="text-gray-600">
        {truncateText(producto.descripcion, 100)}
      </p>

      <div className="mt-4">
        <p className="text-2xl font-bold text-green-600">
          {formatCurrency(producto.precio, 'MXN')}
        </p>

        <p className="text-sm text-gray-500">
          Agregado: {formatDate(producto.createdAt)}
        </p>
      </div>
    </Card>
  );
}
```

### Validators - Validación de formularios

```jsx
import { useState } from 'react';
import { isValidEmail, isRequired, hasMinLength } from '../utils/validators';
import { Input, Button, Card, Alert } from '../components/ui';

function FormularioRegistro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validar = () => {
    const newErrors = {};

    if (!isRequired(formData.nombre)) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!isRequired(formData.email)) {
      newErrors.email = 'El email es requerido';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!isRequired(formData.password)) {
      newErrors.password = 'La contraseña es requerida';
    } else if (!hasMinLength(formData.password, 6)) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validar()) {
      console.log('Formulario válido:', formData);
      // Enviar datos...
    }
  };

  const handleChange = (campo) => (e) => {
    setFormData({ ...formData, [campo]: e.target.value });
  };

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">Registro</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          value={formData.nombre}
          onChange={handleChange('nombre')}
          error={errors.nombre}
          placeholder="Tu nombre completo"
        />

        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          placeholder="tu@email.com"
        />

        <Input
          label="Contraseña"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          error={errors.password}
          placeholder="Mínimo 6 caracteres"
        />

        <Button type="submit" variant="primary" className="w-full">
          Registrarse
        </Button>
      </form>
    </Card>
  );
}
```

## Página Completa Ejemplo

```jsx
import { useState } from 'react';
import { Card, Button, Input, Alert } from '../components/ui';
import useFetch from '../hooks/useFetch';
import Loading from '../components/common/Loading';
import { formatDate } from '../utils/formatters';
import api from '../services/api';

function PaginaEjemplo() {
  const [busqueda, setBusqueda] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const { data, loading, error, refetch } = useFetch('/items');

  const handleCrear = async () => {
    try {
      await api.post('/items', { nombre: busqueda });
      setMensaje({ tipo: 'success', texto: 'Item creado exitosamente' });
      refetch();
      setBusqueda('');
    } catch (err) {
      setMensaje({ tipo: 'error', texto: 'Error al crear el item' });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mi Página</h1>
        <p className="text-gray-600 mt-2">Ejemplo de una página completa</p>
      </div>

      {mensaje && (
        <Alert
          variant={mensaje.tipo}
          onClose={() => setMensaje(null)}
        >
          {mensaje.texto}
        </Alert>
      )}

      <Card>
        <h2 className="text-xl font-semibold mb-4">Crear nuevo item</h2>
        <div className="flex gap-2">
          <Input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Nombre del item"
            className="mb-0 flex-1"
          />
          <Button
            variant="primary"
            onClick={handleCrear}
            disabled={!busqueda}
          >
            Crear
          </Button>
        </div>
      </Card>

      {loading && <Loading />}

      {error && (
        <Alert variant="error" title="Error">
          {error}
        </Alert>
      )}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items?.map((item) => (
            <Card key={item.id}>
              <h3 className="font-semibold text-lg">{item.nombre}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {formatDate(item.createdAt)}
              </p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default PaginaEjemplo;
```

## Navegación Programática

```jsx
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';

function MiComponente() {
  const navigate = useNavigate();

  const irADashboard = () => {
    navigate('/dashboard');
  };

  const irAtrasConDatos = () => {
    navigate('/about', { state: { desde: 'MiComponente' } });
  };

  return (
    <div className="space-x-2">
      <Button onClick={irADashboard}>
        Ir a Dashboard
      </Button>

      <Button onClick={irAtrasConDatos}>
        Ir a About con datos
      </Button>

      <Button onClick={() => navigate(-1)}>
        Volver
      </Button>
    </div>
  );
}
```

## Obtener parámetros de ruta

```jsx
import { useParams, useLocation } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams(); // Obtener parámetros de URL
  const location = useLocation(); // Obtener datos pasados en navigate

  const { data, loading } = useFetch(`/productos/${id}`);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>Producto #{id}</h1>
      {location.state?.desde && (
        <p>Llegaste desde: {location.state.desde}</p>
      )}
      {/* Renderizar producto */}
    </div>
  );
}
```
