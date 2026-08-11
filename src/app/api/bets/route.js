// src/app/api/bets/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const liveBets = [
    {
      id: '1',
      sport: 'FOOTBALL',
      icon: '⚽',
      teamA: 'Real Madrid',
      teamB: 'Man City',
      odds: { home: 2.10, draw: 2.10, away: 2.10 },
      isLive: true,
    },
    {
      id: '2',
      sport: 'TENNIS',
      icon: '🎾',
      teamA: 'Nadal',
      teamB: 'Djokovic',
      odds: { home: 1.90, draw: 2.30, away: 3.70 },
      isLive: true,
    },
    {
      id: '3',
      sport: 'CRICKET',
      icon: '🏏',
      teamA: 'India',
      teamB: 'Australia',
      odds: { home: 1.20, draw: 2.20, away: 2.10 },
      isLive: true,
    },
  ];

  return NextResponse.json({ success: true, data: liveBets });
}