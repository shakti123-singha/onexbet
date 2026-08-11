'use client';

import { useEffect, useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import LiveBetting from '@/components/LiveBetting';
import ContentGrid from '@/components/ContentGrid';
import Content from '@/components/Content';

// Default mock data as fallback
const DEFAULT_BETS = [
  { id: '1', sport: 'FOOTBALL', icon: '⚽', teamA: 'Real Madrid', teamB: 'Man City', odds: { home: 2.10, draw: 2.10, away: 2.10 } },
  { id: '2', sport: 'TENNIS', icon: '🎾', teamA: 'Nadal', teamB: 'Djokovic', odds: { home: 1.90, draw: 2.30, away: 3.70 } },
  { id: '3', sport: 'CRICKET', icon: '🏏', teamA: 'India', teamB: 'Australia', odds: { home: 1.20, draw: 2.20, away: 2.10 } }
];

const DEFAULT_GAMES = {
  casino: [
    { id: 'c1', name: 'Live Roulette', image: 'https://picsum.photos/seed/roulette/300/200' },
    { id: 'c2', name: 'Live Blackjack', image: 'https://picsum.photos/seed/blackjack/300/200' }
  ],
  slots: [
    { id: 's1', name: 'Gates of Olympus', image: 'https://picsum.photos/seed/olympus/150/150' },
    { id: 's2', name: 'Sweet Bonanza', image: 'https://picsum.photos/seed/bonanza/150/150' },
    { id: 's3', name: '777 Slots', image: 'https://picsum.photos/seed/slots777/150/150' },
    { id: 's4', name: 'Sugar Rush', image: 'https://picsum.photos/seed/sugarrush/150/150' }
  ],
  promotions: [
    { id: 'p1', title: 'Welcome Offers', desc: '100% Welcome Bonus up to $500', badge: '100%' }
  ]
};

export default function Home() {
  const [bets, setBets] = useState(DEFAULT_BETS);
  const [games, setGames] = useState(DEFAULT_GAMES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const betsRes = await fetch('/api/bets');
        if (betsRes.ok) {
          const betsData = await betsRes.json();
          if (betsData.success) setBets(betsData.data);
        }

        const gamesRes = await fetch('/api/games');
        if (gamesRes.ok) {
          const gamesData = await gamesRes.json();
          if (gamesData.success) setGames(gamesData.data);
        }
      } catch (error) {
        console.warn('Using local fallback data because API failed:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="max-w-7xl w-full mx-auto px-4 py-4 space-y-6">
      <HeroBanner />

      {loading ? (
        <div className="text-center py-10 text-gray-400">Loading live odds...</div>
      ) : (
        <>
          <LiveBetting bets={bets} />
          {games && <ContentGrid games={games} />}
        </>
      )}
      <Content />
    </main>
  );
}