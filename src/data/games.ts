export interface Game {
  slug: string;
  name: string;
  shortDescription: string;
  category: 'hexa-away' | 'puzzle-games';
  icon: string;
  cover: string;
  url: string;
}

export const GAMES: Game[] = [
  {
    slug: 'hexa-away',
    name: 'Hexa Away',
    shortDescription: 'A logic puzzle game where you slide hexagon tiles along fixed paths to clear the board. Think ahead and plan your moves carefully!',
    category: 'hexa-away',
    icon: '/assets/icons/hexaaway-icon.png',
    cover: '/assets/covers/hexaaway-cover.png',
    url: '/',
  },
];
