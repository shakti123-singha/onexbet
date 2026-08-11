export default function LiveBetting({ bets }) {
  return (
    <section className="space-y-3">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-2 rounded-t-lg flex items-center justify-between">
        <h2 className="font-extrabold text-sm md:text-base uppercase tracking-wider flex items-center gap-2">
          LIVE BETTING NOW!
        </h2>
        <span className="flex items-center gap-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded font-bold animate-pulse">
          ● LIVE
        </span>
      </div>

      {/* Live Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {bets.map((bet) => (
          <div key={bet.id} className="bg-[#121e36] border border-slate-800 rounded-lg p-3 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5 text-slate-200">
                {bet.icon} {bet.sport}
              </span>
              <span className="text-orange-400">★</span>
            </div>

            <div className="text-center font-bold text-sm text-slate-100">
              {bet.teamA} <span className="text-orange-500 mx-1">vs</span> {bet.teamB}
            </div>

            {/* Odds Buttons */}
            <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
              <button className="bg-[#1a2b4c] hover:bg-orange-500/20 hover:border-orange-500 border border-slate-700 p-1.5 rounded text-center transition">
                <span className="block text-[10px] text-slate-400">1</span>
                <span className="text-amber-400 font-bold">{bet.odds.home.toFixed(2)}</span>
              </button>
              <button className="bg-[#1a2b4c] hover:bg-orange-500/20 hover:border-orange-500 border border-slate-700 p-1.5 rounded text-center transition">
                <span className="block text-[10px] text-slate-400">X</span>
                <span className="text-amber-400 font-bold">{bet.odds.draw.toFixed(2)}</span>
              </button>
              <button className="bg-[#1a2b4c] hover:bg-orange-500/20 hover:border-orange-500 border border-slate-700 p-1.5 rounded text-center transition">
                <span className="block text-[10px] text-slate-400">2</span>
                <span className="text-amber-400 font-bold">{bet.odds.away.toFixed(2)}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}