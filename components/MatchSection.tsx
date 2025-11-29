import React from 'react';
import { RECENT_MATCHES, UPCOMING_MATCHES, VILLARREAL_LOGO } from '../constants';
import { Calendar, Trophy, Clock } from 'lucide-react';

const MatchSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Recent Results */}
          <div>
            <h2 className="text-2xl font-bold text-villarreal-blue mb-6 flex items-center">
              <Trophy className="mr-2 text-villarreal-yellow fill-current" />
              Resultados Recientes
            </h2>
            <div className="space-y-4">
              {RECENT_MATCHES.map((match) => (
                <div key={match.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-villarreal-yellow flex items-center justify-between">
                  {/* Home Team */}
                  <div className="flex items-center justify-end w-1/3 space-x-3 text-right">
                    <span className="font-bold text-villarreal-darkBlue text-sm md:text-base hidden sm:block">
                      {match.isHome ? 'Villarreal' : match.opponent}
                    </span>
                    <span className="font-bold text-villarreal-darkBlue text-sm md:text-base sm:hidden">
                      {match.isHome ? 'Villarreal' : match.opponent.substring(0, 3).toUpperCase()}
                    </span>
                    <img 
                      src={match.isHome ? VILLARREAL_LOGO : match.opponentLogo} 
                      alt="Home Team" 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40?text=?'; }}
                    />
                  </div>

                  {/* Score */}
                  <div className="flex flex-col items-center w-1/3 px-2">
                    <span className="text-2xl font-black text-villarreal-blue tracking-widest bg-gray-100 px-3 py-1 rounded whitespace-nowrap">
                      {match.result}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 mt-1 text-center">{match.competition}</span>
                  </div>

                  {/* Away Team */}
                  <div className="flex items-center justify-start w-1/3 space-x-3 text-left">
                    <img 
                      src={match.isHome ? match.opponentLogo : VILLARREAL_LOGO} 
                      alt="Away Team" 
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40?text=?'; }}
                    />
                    <span className="font-bold text-villarreal-darkBlue text-sm md:text-base hidden sm:block">
                      {match.isHome ? match.opponent : 'Villarreal'}
                    </span>
                    <span className="font-bold text-villarreal-darkBlue text-sm md:text-base sm:hidden">
                      {match.isHome ? match.opponent.substring(0, 3).toUpperCase() : 'Villarreal'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Matches */}
          <div>
            <h2 className="text-2xl font-bold text-villarreal-blue mb-6 flex items-center">
              <Calendar className="mr-2" />
              Próximos Partidos
            </h2>
            <div className="space-y-4">
              {UPCOMING_MATCHES.map((match) => (
                <div key={match.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-villarreal-blue hover:shadow-md transition-shadow">
                  
                  {/* Header: Competition & Time */}
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                       <span className="text-xs font-semibold text-villarreal-yellow bg-villarreal-blue px-2 py-0.5 rounded-full uppercase tracking-wider">
                         {match.competition}
                       </span>
                       <div className="flex items-center text-gray-500 text-sm font-medium">
                         <Clock size={14} className="mr-1" />
                         {match.date} - {match.time}
                       </div>
                  </div>

                  {/* Matchup */}
                  <div className="flex justify-between items-center px-2">
                      {/* Home */}
                      <div className="flex flex-col items-center w-1/3 gap-2">
                        <img 
                          src={match.isHome ? VILLARREAL_LOGO : match.opponentLogo} 
                          alt="Home" 
                          className="w-12 h-12 object-contain"
                          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40?text=?'; }}
                        />
                        <span className="text-sm font-bold text-gray-800 text-center leading-tight">
                          {match.isHome ? 'Villarreal CF' : match.opponent}
                        </span>
                      </div>

                      {/* VS */}
                      <div className="w-1/3 flex justify-center">
                        <span className="text-xl font-black text-gray-300 italic">VS</span>
                      </div>

                      {/* Away */}
                      <div className="flex flex-col items-center w-1/3 gap-2">
                        <img 
                          src={match.isHome ? match.opponentLogo : VILLARREAL_LOGO} 
                          alt="Away" 
                          className="w-12 h-12 object-contain"
                          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/40?text=?'; }}
                        />
                         <span className="text-sm font-bold text-gray-800 text-center leading-tight">
                          {match.isHome ? match.opponent : 'Villarreal CF'}
                        </span>
                      </div>
                  </div>
                </div>
              ))}
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-center text-sm text-yellow-800 font-medium">
                  ¡Compra tus entradas para el próximo partido en el Estadio de la Cerámica!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MatchSection;