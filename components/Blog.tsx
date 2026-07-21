import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24">
      <div className="wrap">
        <div className="mb-10 sm:mb-14 max-w-xl">
          <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            entry no. 006 — the Blog
          </span>
          <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
            Things we've actually written ourselves
          </h2>
          <p className="text-sm sm:text-base mt-3 leading-relaxed" style={{ color: 'var(--muted)' }}>
            No ghost-written filler. If it's boring to us, we don't publish it.
          </p>
        </div>

        <div className="flex flex-col">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 sm:gap-6 py-5 sm:py-6 group ${i !== blogPosts.length - 1 ? 'dash-divider' : ''}`}
            >
              <span className="mono text-xs sm:text-sm hidden sm:block flex-shrink-0 w-8" style={{ color: 'var(--muted)' }}>
                0{i + 1}
              </span>

              <div className="relative w-20 h-16 sm:w-28 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border" style={{ borderColor: 'var(--line)' }}>
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="112px" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="chip text-[11px] px-2.5 py-0.5 rounded-full font-semibold">{post.category}</span>
                  <span className="text-xs hidden sm:inline" style={{ color: 'var(--muted)' }}>{post.readTime}</span>
                </div>
                <h3 className="serif font-semibold text-sm sm:text-lg leading-snug truncate sm:whitespace-normal" style={{ color: 'var(--ink)' }}>
                  {post.title}
                </h3>
                <p className="hidden sm:block text-sm leading-relaxed mt-1" style={{ color: 'var(--muted)' }}>{post.excerpt}</p>
              </div>

              <svg className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: 'var(--terracotta)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
