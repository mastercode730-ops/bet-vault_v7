const points = [
  {
    n: '01',
    title: 'We read the messages ourselves',
    desc: "Not \"our team,\" not a bot — an actual person on the other end. I've personally set up IDs at 2am for people who couldn't sleep before a big match. It happens more than you'd think.",
  },
  {
    n: '02',
    title: 'Setup takes minutes, not days',
    desc: "We ask for your name, which platform, and roughly how much you're depositing. That's the whole form. There isn't a second page.",
  },
  {
    n: '03',
    title: 'Money moves both ways, quickly',
    desc: "UPI deposits usually land instantly. Withdrawals clear within the hour on a normal day. If it's ever slower than that, tell us — we'd genuinely like to know why.",
  },
  {
    n: '04',
    title: "The bonus terms fit in a text message",
    desc: 'No fifteen-page terms document. If we can\'t explain a bonus in two sentences on WhatsApp, we probably shouldn\'t be offering it.',
  },
  {
    n: '05',
    title: 'One ID opens everything',
    desc: 'Cricket, football, a casino table if that\'s your thing on a slow Tuesday. Same login the whole way through.',
  },
  {
    n: '06',
    title: "We'll tell you when to stop",
    desc: "This part isn't a legal formality for us. If a conversation with someone starts sounding less like fun and more like a problem, we say so. Plainly, not in fine print.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="mb-12 sm:mb-16 max-w-xl">
          <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            entry no. 002 — why bother with us
          </span>
          <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
            Six honest reasons, not a highlight reel
          </h2>
        </div>

        <div className="flex flex-col">
          {points.map((p, i) => (
            <div key={p.n} className={`flex gap-5 sm:gap-8 py-7 ${i !== points.length - 1 ? 'dash-divider' : ''}`}>
              <span className="mono text-2xl sm:text-3xl flex-shrink-0 w-12" style={{ color: 'var(--gold)' }}>{p.n}</span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1.5" style={{ color: 'var(--ink)' }}>{p.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed max-w-lg" style={{ color: 'var(--muted)' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
