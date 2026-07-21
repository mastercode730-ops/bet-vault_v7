import { waLink } from '@/lib/whatsapp';

const sports = [
  { icon: '🏏', name: 'Cricket' },
  { icon: '⚽', name: 'Football' },
  { icon: '🏀', name: 'Basketball' },
  { icon: '🎾', name: 'Tennis' },
  { icon: '🏒', name: 'Hockey' },
  { icon: '🎰', name: 'Casino' },
  { icon: '🃏', name: 'Teen Patti' },
  { icon: '🎲', name: 'Live Tables' },
];

export default function Markets() {
  const bannerWa = waLink("Hey Bet Vault, I'm ready to place my first bet — help me get set up.");

  return (
    <section id="markets" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="mb-10 sm:mb-12 max-w-xl">
          <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            entry no. 004 — the full list
          </span>
          <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
            Cricket gets the most messages. It's not the only thing here.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-14 sm:mb-16">
          {sports.map((sport) => (
            <a
              key={sport.name}
              href={waLink(`Hey Bet Vault, I want to bet on ${sport.name}. Can you help me get set up?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="card-plain inline-flex items-center gap-2.5 rounded-full pl-3 pr-5 py-2.5"
            >
              <span className="text-xl leading-none">{sport.icon}</span>
              <span className="font-medium text-sm" style={{ color: 'var(--ink)' }}>{sport.name}</span>
            </a>
          ))}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden p-8 sm:p-12 md:p-14"
          style={{ background: 'var(--ink)' }}
        >
          <svg className="absolute right-6 top-6 opacity-20" width="120" height="120" viewBox="0 0 120 120">
            <g stroke="#D4AF37" strokeWidth="1.6" fill="none" strokeLinecap="round">
              <circle cx="60" cy="60" r="34" opacity="0.7" />
              <path d="M28 46 Q60 60 92 46" opacity="0.5" />
              <path d="M28 74 Q60 60 92 74" opacity="0.5" />
              <path d="M60 26 L60 94" opacity="0.35" />
            </g>
          </svg>
          <div className="relative z-10 max-w-lg">
            <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--gold-tint)' }}>ps.</span>
            <h3 className="serif mt-2 mb-4" style={{ color: '#fff', fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', lineHeight: 1.25, fontWeight: 600 }}>
              Your first bet is one message away. Not a countdown timer, not a "limited slots" trick — just an honest offer.
            </h3>
            <a
              href={bannerWa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-lg text-sm sm:text-base"
            >
              Let's Do This
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
