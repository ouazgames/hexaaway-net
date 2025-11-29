export interface Game {
  slug: string;
  name: string;
  shortDescription: string;
  category: 'geometry-dash' | 'new-games';
  icon: string;
  cover: string;
  url: string;
}

export const GAMES: Game[] = [
  {
    slug: 'geometry-dash',
    name: 'Geometry Dash',
    shortDescription: 'The original rhythm-based platformer. Jump, fly, and flip your way through challenging levels in sync with the music.',
    category: 'geometry-dash',
    icon: '/assets/icons/geometrydash-icon.webp',
    cover: '/assets/covers/geometry-dash-gameplay-screenshot-obstacles.png',
    url: '/',
  },
  {
    slug: 'geometry-dash-lite',
    name: 'Geometry Dash Lite',
    shortDescription: 'The free, beginner-friendly version of Geometry Dash with a curated selection of levels. Perfect for learning the basics.',
    category: 'geometry-dash',
    icon: '/assets/icons/GEOMETRYDASHLITE-ICON.png',
    cover: '/assets/covers/geometry-dash-lite-gameplay-screenshot-blue-theme.png',
    url: '/geometry-dash-lite/',
  },
  {
    slug: 'geometry-dash-meltdown',
    name: 'Geometry Dash Meltdown',
    shortDescription: 'A spin-off with new levels, music, and a dark, neon-themed aesthetic. Offers a fresh, challenging experience.',
    category: 'geometry-dash',
    icon: '/assets/icons/geometrydashmeltdown-icon.webp',
    cover: '/assets/covers/geometry-dash-meltdown-gameplay-screenshot-dark-neon.png',
    url: '/geometry-dash-meltdown/',
  },
  {
    slug: 'geometry-dash-subzero',
    name: 'Geometry Dash SubZero',
    shortDescription: 'A winter-themed spin-off with icy levels and cool music. Experience the classic gameplay with a frosty aesthetic.',
    category: 'geometry-dash',
    icon: '/assets/icons/geometrydashSUBZERO-ICON.webp',
    cover: '/assets/covers/geometry-dash-subzero-gameplay-screenshot-winter-theme.png',
    url: '/geometry-dash-subzero/',
  },
  {
    slug: 'geometry-dash-breeze',
    name: 'Geometry Dash Breeze',
    shortDescription: 'The newest, most colorful spin-off with vibrant levels and upbeat music. A refreshing and playful take on the series.',
    category: 'new-games', // Assuming this is the newest game
    icon: '/assets/icons/geometrydashBREEZE-ICON.png',
    cover: '/assets/covers/geometry-dash-breeze-gameplay-screenshot-colorful-vibrant.png',
    url: '/geometry-dash-breeze/',
  },
];
