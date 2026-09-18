import { useEffect, useRef } from 'react';
import { Locale, t } from '../i18n/translations';
import logoSrc from '../../assets/log-removebg.png';
import videoSrc from '../../assets/media-landingpage.mp4';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const tr = t[locale];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const vid = videoRef.current;
    if (!vid) return;
    if (reduced) {
      vid.pause();
    } else {
      vid.play().catch(() => {/* autoplay blocked — stays muted/paused */});
    }
  }, []);

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-[0.08] pointer-events-none" />

      {/* Radial glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '30%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(ellipse, rgba(47,128,255,0.10) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(114,199,255,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="section-container relative z-10 w-full py-20 md:py-28">
        <div className="grid md:grid-cols-[42%_58%] gap-8 md:gap-24 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div
                className="w-5 h-[2px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #2F80FF, #72C7FF)' }}
              />
              <span
                className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: '#4D9CFF' }}
              >
                {tr.hero_eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[52px] md:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.03em]"
              style={{ color: '#F5F8FF' }}
            >
              <span className="block">{tr.hero_h1_line1}</span>
              <span className="block">{tr.hero_h1_line2}</span>
              <span
                className="block"
                style={{ color: '#4D9CFF' }}
              >
                {tr.hero_h1_line3}
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-[17px] leading-[1.7] max-w-[480px]"
              style={{ color: '#A9BDDF' }}
            >
              {tr.hero_desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-1">
              <button
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B9FF]"
                style={{
                  background: 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)',
                  color: '#F5F8FF',
                  boxShadow: '0 0 20px rgba(180,40,240,0.35)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #8F44FA 0%, #FA28C8 100%)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(180,40,240,0.55)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(180,40,240,0.35)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {tr.hero_cta_primary}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('#workflow')}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(14,39,82,0.60)',
                  border: '1px solid rgba(104,165,255,0.25)',
                  color: '#A9BDDF',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(47,128,255,0.10)';
                  (e.currentTarget as HTMLElement).style.color = '#F5F8FF';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(104,165,255,0.45)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(14,39,82,0.60)';
                  (e.currentTarget as HTMLElement).style.color = '#A9BDDF';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(104,165,255,0.25)';
                }}
              >
                {tr.hero_cta_secondary}
              </button>
            </div>

            {/* Proof row */}
            <div
              className="flex flex-wrap gap-6 pt-2 mt-1"
              style={{ borderTop: '1px solid rgba(104,165,255,0.12)' }}
            >
              {[tr.hero_proof_1, tr.hero_proof_2, tr.hero_proof_3].map((proof, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full pulse-glow"
                    style={{ background: '#22C55E' }}
                  />
                  <span className="text-[13px] font-medium" style={{ color: '#7F96B8' }}>
                    {proof}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Video frame */}
          <div className="w-full" style={{ aspectRatio: '16/9' }}>
            {/*
              Video container — ready for:
              <video autoPlay muted loop playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: '22px',
                background: 'rgba(4, 16, 38, 0.80)',
                border: '1px solid rgba(104,165,255,0.18)',
                boxShadow: '0 24px 64px rgba(3,17,38,0.55), 0 4px 16px rgba(3,17,38,0.35)',
              }}
            >
              {/* Fallback layer — visible before/if video loads */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(47,128,255,0.10) 0%, transparent 70%)',
                  }}
                />
                <img
                  src={logoSrc}
                  alt=""
                  aria-hidden="true"
                  className="relative w-20 h-20 object-contain select-none"
                  style={{ opacity: 0.45, filter: 'drop-shadow(0 0 18px rgba(47,128,255,0.35))' }}
                />
              </div>

              {/* Hero video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                disablePictureInPicture
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: 'cover' }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade removed — SessionBg handles seam blending */}
    </section>
  );
}
