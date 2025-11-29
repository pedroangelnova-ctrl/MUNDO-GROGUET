import React from 'react';
import { X, Bell, BellRing, BellOff, ShieldCheck } from 'lucide-react';
import { NotificationPreferences } from '../types';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: NotificationPreferences;
  permission: NotificationPermission;
  onToggle: (key: keyof NotificationPreferences) => void;
  onRequestPermission: () => void;
  onTest: (type: 'breakingNews' | 'liveScore' | 'upcomingMatches') => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  preferences,
  permission,
  onToggle,
  onRequestPermission,
  onTest
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-villarreal-blue p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BellRing className="text-villarreal-yellow" />
            Preferencias de Alerta
          </h2>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Permission Status */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">Estado del navegador:</span>
            <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${
              permission === 'granted' ? 'bg-green-100 text-green-700' : 
              permission === 'denied' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {permission === 'granted' ? 'Permitido' : permission === 'denied' ? 'Bloqueado' : 'Pendiente'}
            </span>
          </div>
          
          {permission !== 'granted' && (
             <button 
              onClick={onRequestPermission}
              className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
             >
               <ShieldCheck size={16} /> Activar Notificaciones de Escritorio
             </button>
          )}
          <p className="text-xs text-gray-400 mt-2">
            Activa los permisos para recibir alertas incluso cuando no estés mirando la web.
          </p>
        </div>

        {/* Toggles */}
        <div className="p-6 space-y-6">
          
          {/* Item 1 */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Última Hora</h3>
              <p className="text-xs text-gray-500">Noticias importantes, fichajes y comunicados.</p>
              <button 
                onClick={() => onTest('breakingNews')}
                className="text-xs text-villarreal-blue underline mt-1 hover:text-villarreal-darkBlue"
              >
                Probar alerta
              </button>
            </div>
            <button 
              onClick={() => onToggle('breakingNews')}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${preferences.breakingNews ? 'bg-villarreal-blue' : 'bg-gray-300'}`}
            >
              <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ${preferences.breakingNews ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Item 2 */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Partidos en Directo</h3>
              <p className="text-xs text-gray-500">Goles, inicio, descanso y final del partido.</p>
              <button 
                onClick={() => onTest('liveScore')}
                className="text-xs text-villarreal-blue underline mt-1 hover:text-villarreal-darkBlue"
              >
                Probar alerta de Gol
              </button>
            </div>
             <button 
              onClick={() => onToggle('liveScore')}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${preferences.liveScore ? 'bg-villarreal-blue' : 'bg-gray-300'}`}
            >
              <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ${preferences.liveScore ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Item 3 */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-800">Próximos Encuentros</h3>
              <p className="text-xs text-gray-500">Recordatorios 1h antes del partido.</p>
              <button 
                onClick={() => onTest('upcomingMatches')}
                className="text-xs text-villarreal-blue underline mt-1 hover:text-villarreal-darkBlue"
              >
                Probar recordatorio
              </button>
            </div>
             <button 
              onClick={() => onToggle('upcomingMatches')}
              className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out relative ${preferences.upcomingMatches ? 'bg-villarreal-blue' : 'bg-gray-300'}`}
            >
              <span className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ${preferences.upcomingMatches ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

        </div>

        <div className="bg-gray-50 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-villarreal-yellow text-villarreal-blue font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors shadow-sm"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;