const voices = [
  { name: 'Rohit M.', location: 'Mumbai', text: "Switched over after a bad run with another platform. My ID took maybe eight minutes, and I kept checking if something had gone wrong because it genuinely felt too easy.", tilt: 'tilt-1' },
  { name: 'Arjun K.', location: 'Chennai', text: "One withdrawal ran late during IPL finals week. What actually got me was that they messaged first to explain, before I'd even noticed anything was off.", tilt: 'tilt-2' },
  { name: 'Priya S.', location: 'Hyderabad', text: "I asked a pretty basic question and expected to feel a bit silly about it. Didn't happen. Just got a normal, patient answer like anyone would want.", tilt: 'tilt-3' },
  { name: 'Vikram D.', location: 'Bangalore', text: "It's been three months and I still just message them for everything. Never bothered figuring out if there's some other way to do it.", tilt: 'tilt-4' },
];

export default function Testimonials() {
  return (
    <section id="voices" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="mb-14 sm:mb-16 max-w-xl">
          <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            entry no. 007 — pinned to the board
          </span>
          <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
            What people actually said
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--muted)' }}>
            One of these mentions something going wrong. We left it in on purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12">
          {voices.map((v, idx) => (
            <div key={idx} className={`card-note ${v.tilt} rounded-lg p-6 transition-transform duration-300`}>
              <p className="serif italic text-base leading-relaxed mb-5" style={{ color: 'var(--ink)' }}>"{v.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="mono w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'var(--gold-tint)', color: '#6B4E10' }}
                >
                  {v.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-xs" style={{ color: 'var(--ink)' }}>{v.name}</div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>{v.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
