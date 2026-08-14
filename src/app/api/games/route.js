import { NextResponse } from 'next/server';

export async function GET() {
  const gamesData = {
    casino: [
      { id: 'c1', image: '/images/Live Roulette .jpg' },
      { id: 'c2', image: '/images/black jack 2.jpg' },
    ],
    slots: [
      { id: 's1', image: '/images/Olympus.jpg' },
      { id: 's2', name: 'Sweet Bonanza', image: '/images/Sweet Bonanza.jpg' },
      { id: 's3', name: '777 Slots', image: '/images/777 slots .jpg' },
      { id: 's4', name: 'Sugar Rush', image: '/images/Sugar.jpg' },
    ],
    promotions: [
      { id: 'p1', title: 'Welcome Offers', desc: '100% Welcome Bonus up to $500', badge: '100%' },
    ],
  };

  return NextResponse.json({ success: true, data: gamesData });
}
