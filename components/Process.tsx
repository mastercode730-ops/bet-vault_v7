import { waLink } from '@/lib/whatsapp';

const steps = [
  { n: '1', title: 'Say hi', desc: "Tap the button. Type literally anything — \"hi\" has worked for plenty of people." },
  { n: '2', title: 'Tell us the basics', desc: 'Name, which platform, roughly what you\'re depositing. Takes about as long as ordering chai.' },
  { n: '3', title: 'Get your ID', desc: 'Right there in the chat. No second app, no email you\'ll forget the password to.' },
  { n: '4', title: 'Deposit, then play', desc: 'UPI usually clears before you\'ve locked your phone again.' },
];

function Arrow() {
  return (
    <svg className="hidden lg:block flex-shrink-0" width="46" height="20" viewBox="0 0 46 20">
      <path d="M2 10 C 16 4, 30 16, 40 10" stroke="var(--terracotta)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M34 4 L 42 10 L 34 16" stroke="var(--terracotta)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Process() {
  const whatsappUrl = waLink("Hey Bet Vault, let's get started — walk me through it.");

  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="mb-12 sm:mb-16 max-w-xl">
          <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            entry no. 003 — what actually happens
          </span>
          <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
            I timed this once. Four minutes, forty seconds.
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--muted)' }}>
            Not a marketing number — I actually had a stopwatch out one slow Tuesday afternoon.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">
          {steps.map((s, i) => (
            <div key={s.n} className="flex lg:flex-col items-start lg:items-start gap-4 lg:gap-3 lg:flex-1">
              <div className="flex items-center gap-4 lg:contents">
                <span
                  className="mono w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-base font-semibold"
                  style={{ background: 'var(--card)', border: '2px solid var(--gold)', color: 'var(--gold)' }}
                >
                  {s.n}
                </span>
                {i < steps.length - 1 && <Arrow />}
              </div>
              <div className="pt-1 lg:pt-2 pr-4">
                <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-lg text-sm sm:text-base"
          >
            Start the Clock
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
