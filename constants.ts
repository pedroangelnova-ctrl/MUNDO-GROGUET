import { Match, Player, NewsArticle } from './types';

export const VILLARREAL_LOGO = 'https://crests.football-data.org/94.svg';

export const RECENT_MATCHES: Match[] = [
  {
    id: 'r1',
    opponent: 'Dortmund',
    opponentLogo: 'https://crests.football-data.org/4.svg',
    result: '4 - 0',
    date: '25 Nov',
    isHome: false,
    competition: 'Champions League',
    status: 'played'
  },
  {
    id: 'r2',
    opponent: 'R.C.D. Mallorca',
    opponentLogo: 'https://crests.football-data.org/89.svg',
    result: '2 - 1',
    date: '22 Nov',
    isHome: true,
    competition: 'La Liga',
    status: 'played'
  },
  {
    id: 'r3',
    opponent: 'RCD Espanyol',
    opponentLogo: 'https://crests.football-data.org/745.svg',
    result: '0 - 2',
    date: '8 Nov',
    isHome: false,
    competition: 'La Liga',
    status: 'played'
  },
  {
    id: 'r4',
    opponent: 'Pafos',
    opponentLogo: 'https://img.uefa.com/imgml/TP/teams/logos/140x140/2608269.png', // Stable UEFA source
    result: '1 - 0',
    date: '5 Nov',
    isHome: false,
    competition: 'Europa League',
    status: 'played'
  }
];

export const UPCOMING_MATCHES: Match[] = [
  {
    id: 'u1',
    opponent: 'Real Sociedad',
    opponentLogo: 'https://crests.football-data.org/92.svg',
    date: 'Mañana',
    time: '14:00',
    isHome: false,
    competition: 'La Liga',
    status: 'upcoming'
  },
  {
    id: 'u2',
    opponent: 'Antoniano',
    opponentLogo: 'https://t.resfu.com/img_data/escudos/medium/3585.jpg', // Stable source for Antoniano
    date: '3 Dic',
    time: '21:00',
    isHome: false,
    competition: 'Copa del Rey',
    status: 'upcoming'
  },
  {
    id: 'u3',
    opponent: 'Getafe',
    opponentLogo: 'https://crests.football-data.org/82.svg',
    date: '6 Dic',
    time: '14:00',
    isHome: true,
    competition: 'La Liga',
    status: 'upcoming'
  },
  {
    id: 'u4',
    opponent: 'København',
    opponentLogo: 'https://crests.football-data.org/1876.svg',
    date: '10 Dic',
    time: '18:45',
    isHome: true,
    competition: 'Europa League',
    status: 'upcoming'
  },
  {
    id: 'u5',
    opponent: 'Levante',
    opponentLogo: 'https://crests.football-data.org/88.svg',
    date: '14 Dic',
    time: '18:30',
    isHome: false,
    competition: 'La Liga',
    status: 'upcoming'
  },
  {
    id: 'u6',
    opponent: 'Osasuna',
    opponentLogo: 'https://crests.football-data.org/79.svg',
    date: '21 Dic',
    time: '16:15',
    isHome: true,
    competition: 'La Liga',
    status: 'upcoming'
  }
];

export const MOCK_PLAYERS: Player[] = [
  { id: 'p1', name: 'Gerard Moreno', position: 'Delantero', number: 7, votes: 1240 },
  { id: 'p2', name: 'Álex Baena', position: 'Centrocampista', number: 16, votes: 980 },
  { id: 'p3', name: 'Dani Parejo', position: 'Centrocampista', number: 10, votes: 850 },
  { id: 'p4', name: 'Raúl Albiol', position: 'Defensa', number: 3, votes: 600 },
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Baena, máximo asistente de Europa',
    summary: 'El centrocampista groguet lidera la tabla de asistencias en las cinco grandes ligas europeas tras su última exhibición.',
    category: 'stats',
    date: 'Hace 2 horas'
  },
  {
    id: 'n2',
    title: 'La Cantera Grogueta brilla en el torneo de Brunete',
    summary: 'El Alevín A se clasifica para las semifinales tras vencer al Atlético de Madrid en una tanda de penaltis de infarto.',
    category: 'academy',
    date: 'Hace 5 horas'
  },
  {
    id: 'n3',
    title: 'Homenaje a Bruno Soriano: Eterno Capitán',
    summary: 'Repasamos la trayectoria de una de las mayores leyendas del club en el aniversario de su retirada.',
    category: 'legends',
    date: 'Ayer'
  }
];