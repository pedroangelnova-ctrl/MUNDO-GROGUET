import React, { useState, useEffect } from 'react';
import { MOCK_NEWS } from '../constants';
import { NewsArticle } from '../types';
import { generateGroguetNews } from '../services/geminiService';
import { Newspaper, Sparkles, Filter } from 'lucide-react';

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>(MOCK_NEWS);
  const [filter, setFilter] = useState<'all' | 'first-team' | 'academy' | 'legends' | 'stats'>('all');
  const [isLoading, setIsLoading] = useState(false);

  const fetchAiNews = async () => {
    setIsLoading(true);
    const newArticles = await generateGroguetNews();
    if (newArticles.length > 0) {
      setArticles(prev => [...newArticles, ...prev]);
    }
    setIsLoading(false);
  };

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(a => a.category === filter);

  const categories = [
    { id: 'all', label: 'Todo' },
    { id: 'first-team', label: 'Primer Equipo' },
    { id: 'stats', label: 'Estadísticas' },
    { id: 'academy', label: 'Cantera' },
    { id: 'legends', label: 'Leyendas' },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-villarreal-blue flex items-center mb-4 md:mb-0">
            <Newspaper className="mr-3" />
            Actualidad Grogueta
          </h2>
          
          <button 
            onClick={fetchAiNews}
            disabled={isLoading}
            className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all ${
              isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-villarreal-blue to-purple-600 text-white hover:shadow-lg'
            }`}
          >
            <Sparkles size={18} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Generando con IA...' : 'Noticias Flash IA'}
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto space-x-2 pb-6 mb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat.id 
                  ? 'bg-villarreal-yellow text-villarreal-blue shadow' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="h-48 overflow-hidden bg-gray-200 relative">
                <img 
                   src={`https://picsum.photos/seed/${article.id}/400/250`} 
                   alt={article.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 bg-villarreal-blue text-white text-xs px-2 py-1 rounded uppercase font-bold opacity-90">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs text-gray-400 font-medium mb-2 block">{article.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-villarreal-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {article.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-villarreal-blue font-semibold text-sm hover:underline">
                    Leer crónica completa &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>No hay noticias en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsSection;
