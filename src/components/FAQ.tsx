import { useState } from 'react';
import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }

export function FAQ({ locale }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const tr = t[locale];

  const faqs = [
    { q: tr.faq1_q, a: tr.faq1_a },
    { q: tr.faq2_q, a: tr.faq2_a },
    { q: tr.faq3_q, a: tr.faq3_a },
    { q: tr.faq4_q, a: tr.faq4_a },
  ];

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32"
      style={{ background: 'transparent' }}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #2F80FF, #72C7FF)' }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#4D9CFF' }}>
                {tr.faq_eyebrow}
              </span>
            </div>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-[-0.03em] leading-[1.1]" style={{ color: '#F5F8FF' }}>
              {tr.faq_heading}
            </h2>
          </div>

          {/* RIGHT — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-250"
                  style={{
                    background: isOpen ? 'rgba(14,39,82,0.65)' : 'rgba(14,39,82,0.30)',
                    border: isOpen ? '1px solid rgba(104,165,255,0.30)' : '1px solid rgba(104,165,255,0.12)',
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className="text-[16px] font-semibold tracking-[-0.01em]"
                      style={{ color: isOpen ? '#F5F8FF' : '#A9BDDF' }}
                    >
                      {faq.q}
                    </span>
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-250"
                      style={{
                        background: isOpen ? 'rgba(47,128,255,0.20)' : 'rgba(47,128,255,0.08)',
                        border: '1px solid rgba(104,165,255,0.20)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2V10M2 6H10" stroke={isOpen ? '#72C7FF' : '#7F96B8'} strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-[15px] leading-[1.7]" style={{ color: '#A9BDDF' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
