import React, { useState } from 'react';
import { MOCK_PLAYERS } from '../constants';
import { Player } from '../types';
import { Star, ThumbsUp } from 'lucide-react';

const MVPSection: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>(MOCK_PLAYERS);
  const [hasVoted, setHasVoted] = useState(false);
  const [votedId, setVotedId] = useState<string | null>(null);

  const handleVote = (id: string) => {
    if (hasVoted) return;
    
    const updatedPlayers = players.map(p => 
      p.id === id ? { ...p, votes: p.votes + 1 } : p
    );
    
    // Sort by votes descending for display after vote
    updatedPlayers.sort((a, b) => b.votes - a.votes);
    
    setPlayers(updatedPlayers);
    setHasVoted(true);
    setVotedId(id);
  };

  const totalVotes = players.reduce((acc, curr) => acc + curr.votes, 0);

  return (
    <div className="py-16 bg-gradient-to-b from-villarreal-blue to-villarreal-darkBlue text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Star className="w-12 h-12 text-villarreal-yellow mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-villarreal-yellow mb-4">
            MVP del Mes
          </h2>
          <p className="text-gray-300 text-lg">
            Elige al mejor jugador del Villarreal CF este mes. ¡Tu opinión cuenta!
          </p>
        </div>

        <div className="space-y-6">
          {players.map((player) => {
            const percentage = totalVotes > 0 ? Math.round((player.votes / totalVotes) * 100) : 0;
            const isSelected = votedId === player.id;

            return (
              <div key={player.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 relative overflow-hidden transition-all hover:bg-white/15">
                {/* Progress Bar Background */}
                {hasVoted && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-villarreal-yellow/20 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                )}
                
                <div className="relative flex items-center justify-between z-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-villarreal-yellow">
                       <img 
                        src={`https://picsum.photos/seed/${player.id}/200`} 
                        alt={player.name}
                        className="w-full h-full object-cover"
                       />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{player.name}</h3>
                      <p className="text-sm text-gray-300">#{player.number} - {player.position}</p>
                    </div>
                  </div>

                  {hasVoted ? (
                    <div className="text-right">
                      <span className="text-2xl font-bold text-villarreal-yellow">{percentage}%</span>
                      <p className="text-xs text-gray-400">{player.votes} votos</p>
                      {isSelected && <span className="text-xs text-green-400 font-bold">¡Tu voto!</span>}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleVote(player.id)}
                      className="bg-villarreal-yellow text-villarreal-blue font-bold py-2 px-6 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all flex items-center shadow-lg"
                    >
                      <ThumbsUp size={18} className="mr-2" /> Votar
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {hasVoted && (
          <div className="mt-8 text-center animate-pulse text-gray-300 text-sm">
            ¡Gracias por participar! Vuelve el próximo mes.
          </div>
        )}
      </div>
    </div>
  );
};

export default MVPSection;
