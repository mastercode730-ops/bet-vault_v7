'use client';

import { useState } from 'react';
import { waLink } from '@/lib/whatsapp';

const faqs = [
  { q: 'What is BetVault?', a: "BetVault is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information." },
  { q: 'How does a BetVault ID work?', a: "An account ID is generally used to identify a user account. Refer to BetVault's current account instructions and terms for the exact process." },
  { q: 'How can I access BetVault?', a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site." },
  { q: 'What sports are available on BetVault?', a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability." },
  { q: 'Does BetVault provide live sports information?', a: "Check the site's current sports section for any live-event information and the terms that apply to its use." },
  { q: 'How can I get help with my BetVault account?', a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts." },
  { q: 'How do I find BetVault login information?', a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel." },
  { q: 'What payment options are supported?', a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts." },
  { q: 'What should I do if I have trouble accessing my account?', a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel." },
  { q: 'Where can I find the latest BetVault updates?', a: "Refer to BetVault's current website information and terms for the most accurate answer." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const whatsappUrl = waLink("Hey Bet Vault, I've got a question that wasn't in your FAQ.");

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="wrap max-w-2xl">
        <div className="mb-12 sm:mb-14 max-w-xl">
          <span className="mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            entry no. 008 — the margin notes
          </span>
          <h2 className="serif mt-4" style={{ color: 'var(--ink)', fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', lineHeight: 1.2, fontWeight: 600 }}>
            Probably what you're wondering
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <div key={idx} className={idx !== faqs.length - 1 ? 'dash-divider' : ''}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-start gap-4 py-5 text-left focus:outline-none"
              >
                <span className="mono text-sm flex-shrink-0 pt-0.5" style={{ color: 'var(--gold)' }}>{String(idx + 1).padStart(2, '0')}</span>
                <span className="font-medium text-sm sm:text-base flex-1" style={{ color: 'var(--ink)' }}>{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-transform duration-300"
                  style={{ borderColor: 'var(--gold)', color: 'var(--gold)', transform: openIdx === idx ? 'rotate(45deg)' : 'none' }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {openIdx === idx && (
                <p className="text-sm leading-relaxed pb-5 pl-9" style={{ color: 'var(--muted)' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-center gap-3">
          <p className="text-sm" style={{ color: 'var(--muted)' }}>Still stuck on something? We're right here.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 btn-whatsapp px-6 py-3 rounded-lg text-sm font-bold">
            <WhatsAppIcon />
            Just Ask Us
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 448 512">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
