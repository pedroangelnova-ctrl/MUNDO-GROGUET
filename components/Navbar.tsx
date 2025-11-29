import React from 'react';
import { ViewState } from '../types';
import { Menu, X, Bell } from 'lucide-react';
import { VILLARREAL_LOGO } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onOpenNotifications: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenNotifications }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems: { label: string; value: ViewState }[] = [
    { label: 'Inicio', value: 'home' },
    { label: 'Noticias', value: 'news' },
    { label: 'Votar MVP', value: 'mvp' },
    { label: 'Contacto', value: 'contact' },
  ];

  return (
    <nav className="bg-villarreal-yellow shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src={VILLARREAL_LOGO} 
              alt="Villarreal CF" 
              className="w-10 h-10 object-contain mr-2 drop-shadow-sm"
            />
            <span className="font-bold text-villarreal-blue text-xl tracking-tight">MUNDO GROGUET</span>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    currentView === item.value
                      ? 'text-villarreal-blue border-b-2 border-villarreal-blue'
                      : 'text-villarreal-darkBlue hover:text-villarreal-blue opacity-80 hover:opacity-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Notification Bell */}
            <button 
              onClick={onOpenNotifications}
              className="text-villarreal-darkBlue hover:text-white p-2 rounded-full hover:bg-villarreal-blue/20 transition-colors relative"
              aria-label="Notificaciones"
            >
              <Bell size={24} />
              {/* Optional: Add a small dot if there are unread notifications, or simulate it */}
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-villarreal-yellow"></span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-villarreal-blue hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-villarreal-yellow pb-4 border-t border-yellow-500">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                   currentView === item.value
                    ? 'bg-villarreal-blue text-white'
                    : 'text-villarreal-darkBlue hover:bg-yellow-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;