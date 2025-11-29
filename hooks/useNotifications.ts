import { useState, useEffect, useCallback } from 'react';
import { NotificationPreferences, ToastNotification } from '../types';

const DEFAULT_PREFERENCES: NotificationPreferences = {
  breakingNews: true,
  liveScore: true,
  upcomingMatches: true,
};

export const useNotifications = () => {
  const [preferences, setPreferences] = useState<NotificationPreferences>(() => {
    const saved = localStorage.getItem('groguet_notifications');
    return saved ? JSON.parse(saved) : DEFAULT_PREFERENCES;
  });

  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groguet_notifications', JSON.stringify(preferences));
  }, [preferences]);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      console.warn('Este navegador no soporta notificaciones de escritorio');
      return;
    }
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  const togglePreference = (key: keyof NotificationPreferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const triggerNotification = useCallback((
    title: string, 
    body: string, 
    type: 'breakingNews' | 'liveScore' | 'upcomingMatches'
  ) => {
    // Check if user wants this type of notification
    if (!preferences[type]) return;

    // 1. In-App Toast (Always show)
    const toastId = Date.now().toString();
    const toastType = type === 'liveScore' ? 'success' : type === 'breakingNews' ? 'alert' : 'info';
    
    setToasts(prev => [...prev, { id: toastId, title, message: body, type: toastType }]);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => removeToast(toastId), 5000);

    // 2. Browser Native Notification (If permitted)
    if (permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: 'https://cdn-icons-png.flaticon.com/512/824/824757.png', // Generic shield icon or app logo
          badge: 'https://cdn-icons-png.flaticon.com/512/824/824757.png',
        });
      } catch (e) {
        console.error("Error mostrando notificación nativa", e);
      }
    }
  }, [preferences, permission, removeToast]);

  return {
    preferences,
    permission,
    toasts,
    requestPermission,
    togglePreference,
    triggerNotification,
    removeToast
  };
};