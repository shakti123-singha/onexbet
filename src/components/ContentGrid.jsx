export default function ContentGrid({ games }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Sportsbook Section */}
      <div className="bg-[#121e36] border border-slate-800 rounded-lg p-3 space-y-2">
        <h3 className="text-xs font-bold uppercase text-orange-500 border-b border-slate-800 pb-2">
          SPORTSBOOK
        </h3>
        <div className="text-xs space-y-1 text-slate-300">
          <div className="p-2 bg-[#1a2b4c] rounded cursor-pointer font-medium hover:text-white">
            Odds Feed
          </div>
          <div className="p-2 hover:bg-[#1a2b4c] rounded cursor-pointer transition">
            Real Madrid vs Man City
          </div>
          <div className="p-2 hover:bg-[#1a2b4c] rounded cursor-pointer transition">
            Live Casinos
          </div>
        </div>
      </div>


      <div className="bg-[#121e36] border border-slate-800 rounded-lg p-3 space-y-2">
        <h3 className="text-xs font-bold uppercase text-orange-500 border-b border-slate-800 pb-2">
          LIVE CASINO
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {games.casino.map((item) => (
            <div key={item.id} className="relative rounded overflow-hidden group cursor-pointer border border-slate-800">
              <img src={item.image} alt={item.name} className="w-full h-24 object-cover group-hover:scale-105 transition" />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-1 text-[10px] font-bold text-center truncate">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slots Section */}
      <div className="bg-[#121e36] border border-slate-800 rounded-lg p-3 space-y-2">
        <h3 className="text-xs font-bold uppercase text-orange-500 border-b border-slate-800 pb-2">
          SLOTS
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {games.slots.map((slot) => (
            <div key={slot.id} className="relative rounded overflow-hidden group cursor-pointer border border-slate-800">
              <img src={slot.image} alt={slot.name} className="w-full h-16 object-cover group-hover:scale-105 transition" />
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-0.5 text-[9px] font-bold text-center truncate">
                {slot.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotions Section */}
      <div className="bg-[#121e36] border border-slate-800 rounded-lg p-3 space-y-2">
        <h3 className="text-xs font-bold uppercase text-orange-500 border-b border-slate-800 pb-2">
          PROMOTIONS
        </h3>
        {games.promotions.map((promo) => (
          <div key={promo.id} className="bg-gradient-to-br from-orange-600/20 to-amber-600/10 border border-orange-500/30 p-3 rounded-lg space-y-2">
            <span className="bg-orange-500 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
              {promo.badge}
            </span>
            <h4 className="text-xs font-bold text-white">{promo.title}</h4>
            <p className="text-[11px] text-slate-300">{promo.desc}</p>
          </div>
        ))}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <span>VISA</span>
          <span>Mastercard</span>
          <span>Crypto</span>
        </div>
      </div>
    </div>
  );
}