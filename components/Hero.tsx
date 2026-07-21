import { waLink } from '@/lib/whatsapp';

export default function Hero() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to get my betting ID set up.");

  return (
    <section id="hero" className="pt-24 lg:pt-16 pb-14 sm:pb-20">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
              entry no. 001 — the pitch
            </span>

            <h1 className="serif mt-4 mb-6" style={{ color: 'var(--ink)', fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 1.15, fontWeight: 600 }}>
              You send us a message.{' '}
              <span className="relative inline-block">
                That's genuinely it.
                <svg className="absolute left-0 -bottom-2 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M2 6 C 60 2, 120 9, 180 4 S 260 2, 298 6" stroke="var(--terracotta)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl" style={{ color: 'var(--ink)' }}>
              I'm one of maybe six people who actually read the messages that land here, so when I say
              someone will reply fast, I mean an actual person — probably me, checking my phone between
              overs of whatever match is on that day.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-9 max-w-xl" style={{ color: 'var(--muted)' }}>
              No forms. No app to download. You tell us what you need, we set up your cricket betting
              ID, and you're placing your first bet before the ad break ends.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-lg text-sm sm:text-base"
              >
                Message Us on WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#process" className="text-sm font-medium underline underline-offset-4" style={{ color: 'var(--muted)', textDecorationColor: 'var(--line)' }}>
                or read how it actually works ↓
              </a>
            </div>

            <div className="dash-divider mt-12 pt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
              <div>
                <span className="mono text-2xl font-semibold" style={{ color: 'var(--terracotta)' }}>3M+</span>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>people already do this</p>
              </div>
              <div>
                <span className="mono text-2xl font-semibold" style={{ color: 'var(--terracotta)' }}>&lt;5 min</span>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>average setup time</p>
              </div>
              <div>
                <span className="mono text-2xl font-semibold" style={{ color: 'var(--terracotta)' }}>24/7</span>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>someone's actually awake</p>
              </div>

              <div className="flex items-center -space-x-2.5 ml-auto sm:ml-0">
                {['R', 'A', 'P', 'V', '+'].map((letter, i) => (
                  <div
                    key={i}
                    className="mono w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold border-2"
                    style={{
                      background: i === 4 ? 'var(--ink)' : 'var(--gold-tint)',
                      color: i === 4 ? '#fff' : '#6B4E10',
                      borderColor: 'var(--paper)',
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="card-note tilt-2 rounded-2xl w-full max-w-[340px] overflow-hidden">
              <div className="flex items-center gap-2.5 px-4 py-3" style={{ background: 'var(--ink)' }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--gold)', color: '#221600' }}>
                  BV
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: '#fff' }}>Bet Vault</div>
                  <div className="mono text-[10px] flex items-center gap-1" style={{ color: '#6FE39B' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#6FE39B' }} />
                    online
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 p-4" style={{ background: '#EFE7D3' }}>
                <div className="self-start rounded-xl rounded-bl-sm px-3.5 py-2.5 max-w-[85%]" style={{ background: '#fff' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink)' }}>hi, can I get my ID set up?</p>
                </div>
                <div className="self-end rounded-xl rounded-br-sm px-3.5 py-2.5 max-w-[85%]" style={{ background: '#DCF3D9' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink)' }}>sure — what's your name, and cricket or football to start?</p>
                </div>
                <div className="self-start rounded-xl rounded-bl-sm px-3.5 py-2.5 max-w-[85%]" style={{ background: '#fff' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink)' }}>Rohan, cricket please</p>
                </div>
                <div className="self-end rounded-xl rounded-br-sm px-3.5 py-2.5 max-w-[85%]" style={{ background: '#DCF3D9' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink)' }}>
                    done ✅ ID: <span className="mono">RV8823</span> — deposit whenever you're ready
                  </p>
                </div>
                <span className="mono text-[10px] self-end pr-1" style={{ color: 'var(--muted)' }}>4 min 12 sec later</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
