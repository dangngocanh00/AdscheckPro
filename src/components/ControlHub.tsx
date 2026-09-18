import { Locale, t } from '../i18n/translations';
import controlHubVideo from '../../assets/controlhubmedia-no-logo.mp4';

interface Props { locale: Locale }

export function ControlHub({ locale }: Props) {
  const tr = t[locale];

  return (
    <section
      id="control-hub"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(114,199,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[42fr_58fr] gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #24427A, #3A6BAF)' }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: '#24427A' }}>
                {tr.hub_eyebrow}
              </span>
            </div>
            <h2
              className="text-[40px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-6"
              style={{ color: '#071F73' }}
            >
              {tr.hub_heading_1}
              <br />
              <span style={{ color: '#2E5BFF' }}>
                {tr.hub_heading_2}
              </span>
            </h2>
            <p className="text-[16px] font-medium leading-[1.7] mb-8" style={{ color: '#0A2A72' }}>
              {tr.hub_desc}
            </p>
            <button
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)',
                color: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(180,40,240,0.35)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #8F44FA 0%, #FA28C8 100%)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(180,40,240,0.50)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(180,40,240,0.35)';
              }}
            >
              {tr.hub_cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {['Desktop', 'Tablet', 'Mobile', 'Realtime'].map(f => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium"
                  style={{
                    background: 'rgba(14,39,82,0.60)',
                    border: '1px solid rgba(104,165,255,0.18)',
                    color: '#A9BDDF',
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22C55E' }} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Media composition */}
          <div className="relative w-full">
            <div
              className="absolute -inset-8 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(47,128,255,0.10) 0%, transparent 70%)' }}
            />

            {/* Main frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(104,165,255,0.25)',
                aspectRatio: '16/9',
                boxShadow: '0 0 50px rgba(47,128,255,0.12)',
              }}
            >
              <video
                src={controlHubVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                disablePictureInPicture
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
