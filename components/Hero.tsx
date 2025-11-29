import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-villarreal-blue text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/1200/400?grayscale&blur=2"
          alt="Estadio de la Cerámica"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-villarreal-yellow drop-shadow-md">
          Endavant Villarreal!
        </h1>
        <p className="mt-4 max-w-3xl text-xl text-gray-200">
          Toda la actualidad del Submarino Amarillo. Noticias, resultados en directo, estadísticas y el orgullo de nuestra cantera.
        </p>
        <div className="mt-8">
           <span className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-villarreal-blue bg-villarreal-yellow hover:bg-yellow-300 transition-colors">
              Próximo Partido
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
