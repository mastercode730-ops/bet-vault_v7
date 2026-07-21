const items = [
  'Cricket', 'Football', 'Casino', 'Live odds', 'Real payouts', 'Real people',
  'IPL', 'T20 leagues', 'UPI in seconds', 'No nonsense',
];

export default function TrustStrip() {
  const loop = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-content mono text-xs sm:text-sm tracking-wide" style={{ color: 'var(--gold-tint)' }}>
        {loop.map((item, i) => (
          <span key={i} className="mx-5 sm:mx-7 inline-flex items-center gap-5 sm:gap-7">
            {item}
            <span style={{ color: 'var(--terracotta)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
