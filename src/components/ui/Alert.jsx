/**
 * Componente Alert
 * Muestra mensajes de alerta con diferentes variantes
 *
 * @param {string} variant - Tipo de alerta: success, error, warning, info
 * @param {string} title - Título de la alerta (opcional)
 * @param {ReactNode} children - Contenido de la alerta
 * @param {function} onClose - Callback al cerrar (opcional)
 */
function Alert({ variant = 'info', title, children, onClose, className = '' }) {
  const variants = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: '✓',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: '✕',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: '⚠',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: 'ℹ',
    },
  };

  const style = variants[variant] || variants.info;

  return (
    <div
      className={`${style.bg} ${style.border} ${style.text} border-l-4 p-4 rounded ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-xl">{style.icon}</span>
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="font-semibold mb-1">{title}</h3>
          )}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 hover:opacity-70"
          >
            <span className="text-lg">×</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Alert;
