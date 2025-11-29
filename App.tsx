import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchSection from './components/MatchSection';
import NewsSection from './components/NewsSection';
import MVPSection from './components/MVPSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NotificationModal from './components/NotificationModal';
import NotificationToast from './components/NotificationToast';
import { useNotifications } from './hooks/useNotifications';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  
  // Custom hook for notifications
  const { 
    preferences, 
    permission, 
    toasts,
    requestPermission, 
    togglePreference, 
    triggerNotification,
    removeToast
  } = useNotifications();

  // Helper to test notifications from the modal
  const handleTestNotification = (type: 'breakingNews' | 'liveScore' | 'upcomingMatches') => {
    switch (type) {
      case 'breakingNews':
        triggerNotification('🚨 OFICIAL: Nuevo Fichaje', 'El Villarreal CF llega a un acuerdo por un joven talento brasileño.', type);
        break;
      case 'liveScore':
        triggerNotification('⚽ ¡GOOOOOOL del Villarreal!', 'Gerard Moreno marca el 1-0 en el minuto 88.', type);
        break;
      case 'upcomingMatches':
        triggerNotification('📅 ¡Día de Partido!', 'Villarreal vs Barcelona empieza en 1 hora. ¡Endavant!', type);
        break;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <MatchSection />
          </>
        );
      case 'news':
        return <NewsSection />;
      case 'mvp':
        return <MVPSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        onOpenNotifications={() => setIsNotificationModalOpen(true)}
      />
      
      {/* Global Toast Container */}
      <NotificationToast notifications={toasts} onClose={removeToast} />

      {/* Notification Settings Modal */}
      <NotificationModal 
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        preferences={preferences}
        permission={permission}
        onToggle={togglePreference}
        onRequestPermission={requestPermission}
        onTest={handleTestNotification}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}

export default App;