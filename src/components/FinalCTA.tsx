import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }

export function FinalCTA({ locale }: Props) {
  const tr = t[locale];

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Central radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(47,128,255,0.15) 0%, rgba(114,199,255,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Orbital ring effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          border: '1px solid rgba(47,128,255,0.08)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          border: '1px solid rgba(47,128,255,0.05)',
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #2F80FF)' }} />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#4D9CFF' }}>
            {tr.final_cta_eyebrow}
          </span>
          <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #2F80FF, transparent)' }} />
        </div>

        {/* Heading */}
        <h2
          className="text-[44px] md:text-[60px] lg:text-[72px] font-bold tracking-[-0.03em] leading-[1.05] mb-5"
          style={{ color: '#F5F8FF' }}
        >
          {tr.final_cta_heading_1}
          <br />
          <span
            style={{ color: '#4D9CFF' }}
          >
            {tr.final_cta_heading_2}
          </span>
        </h2>

        {/* CTA */}
        <div className="mt-10">
          <button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[17px] font-bold transition-all duration-250"
            style={{
              background: 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)',
              color: '#FFFFFF',
              boxShadow: '0 0 40px rgba(180,40,240,0.40), 0 0 80px rgba(180,40,240,0.15)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #8F44FA 0%, #FA28C8 100%)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(180,40,240,0.55), 0 0 100px rgba(180,40,240,0.20)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(180,40,240,0.40), 0 0 80px rgba(180,40,240,0.15)';
            }}
          >
            {tr.final_cta_button}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.5 9H14.5M10.5 5L14.5 9L10.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
