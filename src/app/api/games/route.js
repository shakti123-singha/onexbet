import { NextResponse } from 'next/server';

export async function GET() {
  const gamesData = {
    casino: [
      { id: 'c1', name: 'Live Roulette', image: 'https://picsum.photos/seed/roulette/300/200' },
      { id: 'c2', name: 'Live Blackjack', image: 'https://picsum.photos/seed/blackjack/300/200' },
    ],
    slots: [
      { id: 's1', name: 'Gates of Olympus', image: 'https://picsum.photos/seed/olympus/150/150' },
      { id: 's2', name: 'Sweet Bonanza', image: 'https://picsum.photos/seed/bonanza/150/150' },
      { id: 's3', name: '777 Slots', image: 'https://picsum.photos/seed/slots777/150/150' },
      { id: 's4', name: 'Sugar Rush', image: 'https://picsum.photos/seed/sugarrush/150/150' },
    ],
    promotions: [
      { id: 'p1', title: 'Welcome Offers', desc: '100% Welcome Bonus up to $500', badge: '100%' },
    ],
  };

  return NextResponse.json({ success: true, data: gamesData });
}
