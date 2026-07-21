import { waLink } from '@/lib/whatsapp';

export default function About() {
  const whatsappUrl = waLink("Hey Bet Vault, I'd like to know more about the team.");

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="wrap max-w-2xl">
        <div className="flex items-start justify-between gap-6 mb-8">
          <div>
            <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
              entry no. 005 — the actual story
            </span>
            <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
              We started this because we were annoyed, mostly
            </h2>
          </div>

          <svg className="hidden sm:block flex-shrink-0" width="96" height="96" viewBox="0 0 96 96">
            <g stroke="#B5502E" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
              <path d="M10 70 L86 70" />
              <path d="M20 70 L20 44 L58 44 L58 70" />
              <path d="M24 44 L24 34 L54 34 L54 44" />
              <path d="M70 70 L70 52 C70 46 76 46 76 52 L76 62 C76 68 70 68 70 62" />
              <path d="M70 46 Q72 40 76 46" opacity="0.5" />
            </g>
            <g stroke="#B8892E" strokeWidth="1.6" fill="none" strokeLinecap="round">
              <circle cx="36" cy="20" r="3" opacity="0.5" />
              <path d="M46 14 L50 18" opacity="0.4" />
            </g>
          </svg>
        </div>

        <div className="card-note rounded-2xl p-6 sm:p-9">
          <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--ink)' }}>
            2023. A few of us were using other platforms and getting fed up in the usual ways —
            withdrawals that sat "processing" for four days, support chats that clearly weren't
            people, sign-up forms asking for our mother's maiden name to place a cricket bet.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
            One of us had spent a few years in payments and knew exactly why withdrawals were slow
            (spoiler: usually they don't need to be). Another had built support tooling for a
            fintech startup. The rest of us mostly just watch a lot of cricket and got tired of
            being treated like a support ticket instead of a person.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
            So Bet Vault is, genuinely, the platform we wished existed. We're still small. We're not
            trying to be the biggest name out there — we'd rather stay a size where the person
            replying to you on WhatsApp can actually go fix the thing that's broken, instead of
            opening ticket #48213 and hoping someone else does.
          </p>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
            That's really the whole pitch. Not flashy. Just people who answer.
          </p>

          <div className="dash-divider mt-6 pt-5 flex items-center justify-between flex-wrap gap-4">
            <span className="serif italic text-sm" style={{ color: 'var(--muted)' }}>— the Bet Vault team, still figuring out the good bits as we go</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-outline px-5 py-2.5 rounded-lg text-sm"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
