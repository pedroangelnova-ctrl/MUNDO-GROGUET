import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-villarreal-darkBlue text-white py-8 border-t-4 border-villarreal-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-villarreal-yellow">MUNDO GROGUET</h2>
          <p className="text-sm text-gray-400 mt-1">Hecho por y para aficionados.</p>
        </div>
        <div className="flex space-x-6 text-sm text-gray-300">
           <span>&copy; {new Date().getFullYear()} Mundo Groguet</span>
           <span className="hover:text-villarreal-yellow cursor-pointer">Aviso Legal</span>
           <span className="hover:text-villarreal-yellow cursor-pointer">Privacidad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;