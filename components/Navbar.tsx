'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { waLink } from '@/lib/whatsapp';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Why Us', href: '#why' },
  { label: 'The Process', href: '#process' },
  { label: 'What You Can Bet On', href: '#markets' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Questions', href: '#faq' },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const whatsappUrl = waLink("Hey Bet Vault, can I get a bit more info on this?");

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sheetOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-[240px] z-40 py-7 px-5">
        <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2.5 mb-8 focus:outline-none">
          <Image src="/logo.jpeg" alt="Bet Vault" width={38} height={38} className="rounded-lg object-contain" priority />
          <span className="serif font-semibold text-base gold-text">Bet Vault</span>
        </button>

        <nav className="flex flex-col gap-0.5 flex-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="sidebar-link text-left px-3 py-2.5 rounded-r-md text-sm font-medium focus:outline-none"
              style={{ color: 'var(--ink)' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 btn-whatsapp px-4 py-3 rounded-lg text-sm font-bold mt-4"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Message Us
        </a>
        <p className="mono text-[10px] mt-3 text-center" style={{ color: 'var(--muted)' }}>
          usually replies in minutes
        </p>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40" style={{ background: 'var(--card)', borderBottom: '1px solid var(--line)' }}>
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 focus:outline-none">
            <Image src="/logo.jpeg" alt="Bet Vault" width={34} height={34} className="rounded-lg object-contain" priority />
            <span className="serif font-semibold text-sm gold-text">Bet Vault</span>
          </button>
          <button
            onClick={() => setSheetOpen(true)}
            className="p-2.5 rounded-lg border"
            style={{ borderColor: 'var(--line)', color: 'var(--terracotta)' }}
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile bottom sheet */}
      {sheetOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] flex flex-col justify-end">
          <div className="sheet-overlay absolute inset-0" onClick={() => setSheetOpen(false)} />
          <div className="sheet-panel relative rounded-t-3xl px-6 pt-5 pb-8 max-h-[80vh] overflow-y-auto">
            <div className="w-10 h-1.5 rounded-full mx-auto mb-5" style={{ background: 'var(--line)' }} />
            <div className="flex items-center justify-between mb-5">
              <span className="serif font-semibold text-base" style={{ color: 'var(--ink)' }}>Around the site</span>
              <button onClick={() => setSheetOpen(false)} className="p-1.5" aria-label="Close menu" style={{ color: 'var(--muted)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-0.5 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => { scrollTo(link.href); setSheetOpen(false); }}
                  className="text-left px-3 py-3 rounded-lg text-sm font-medium focus:outline-none"
                  style={{ color: 'var(--ink)', borderBottom: '1px solid var(--line)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSheetOpen(false)}
              className="inline-flex items-center justify-center gap-2 btn-whatsapp px-6 py-3.5 rounded-full text-sm font-bold w-full"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-5 right-4 z-50 w-14 h-14 rounded-full btn-whatsapp flex items-center justify-center shadow-2xl animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </>
  );
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
