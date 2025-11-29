export type ViewState = 'home' | 'news' | 'mvp' | 'contact';

export interface Match {
  id: string;
  opponent: string;
  opponentLogo?: string;
  date: string;
  time?: string;
  result?: string;
  isHome: boolean;
  competition: string;
  status: 'played' | 'upcoming';
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: 'first-team' | 'academy' | 'legends' | 'stats';
  date: string;
  imageUrl?: string;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  image?: string;
  votes: number;
}

export interface NotificationPreferences {
  breakingNews: boolean;
  liveScore: boolean;
  upcomingMatches: boolean;
}

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'alert';
}