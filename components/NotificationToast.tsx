import React from 'react';
import { ToastNotification } from '../types';
import { X, Bell, Trophy, Calendar } from 'lucide-react';

interface NotificationToastProps {
  notifications: ToastNotification[];
  onClose: (id: string) => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ notifications, onClose }) => {
  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      {notifications.map((note) => (
        <div 
          key={note.id}
          className={`pointer-events-auto transform transition-all duration-300 ease-in-out animate-slide-in
            bg-white border-l-4 shadow-xl rounded-r-lg p-4 flex items-start gap-3
            ${note.type === 'success' ? 'border-green-500' : note.type === 'alert' ? 'border-red-500' : 'border-villarreal-blue'}
          `}
        >
          <div className={`p-2 rounded-full flex-shrink-0 ${
            note.type === 'success' ? 'bg-green-100 text-green-600' : 
            note.type === 'alert' ? 'bg-red-100 text-red-600' : 
            'bg-blue-100 text-villarreal-blue'
          }`}>
            {note.type === 'success' ? <Trophy size={20} /> : 
             note.type === 'alert' ? <Bell size={20} /> : 
             <Calendar size={20} />}
          </div>
          
          <div className="flex-1">
            <h4 className="font-bold text-gray-800 text-sm">{note.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{note.message}</p>
          </div>

          <button 
            onClick={() => onClose(note.id)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationToast;