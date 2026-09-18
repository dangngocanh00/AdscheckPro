import { useState } from 'react';
import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }
type BenefitIcon = 'screen' | 'flow' | 'shield' | 'growth';

function OrbitIcon({ kind }: { kind: BenefitIcon }) {
  const props = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  if (kind === 'screen') return <svg {...props}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3M3 8h18" /></svg>;
  if (kind === 'flow') return <svg {...props}><rect x="2" y="9" width="5" height="5" rx="1" /><rect x="17" y="3" width="5" height="5" rx="1" /><rect x="17" y="16" width="5" height="5" rx="1" /><path d="M7 11.5h5a3 3 0 0 0 3-3V5.5h2M7 11.5h5a3 3 0 0 1 3 3v4h2" /></svg>;
  if (kind === 'shield') return <svg {...props}><path d="M12 2 20 5v6c0 5-3.3 8.5-8 11-4.7-2.5-8-6-8-11V5l8-3Z" /><path d="m8.5 12 2.4 2.4 4.8-5" /></svg>;
  return <svg {...props}><path d="M3 20h18M6 17v-4M11 17V9M16 17V5M5 10l5-4 4 2 5-5" /><path d="M16 3h3v3" /></svg>;
}

function HolographicWorkspaceVisual() {
  return (
    <svg className="benefits-core-visual" viewBox="0 0 132 104" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="benefits-pane-back" x1="40" y1="8" x2="112" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#70D9FF" stopOpacity=".27" />
          <stop offset="1" stopColor="#1756B6" stopOpacity=".08" />
        </linearGradient>
        <linearGradient id="benefits-pane-middle" x1="32" y1="21" x2="106" y2="82" gradientUnits="userSpaceOnUse">
          <stop stopColor="#91E6FF" stopOpacity=".32" />
          <stop offset="1" stopColor="#1F72D6" stopOpacity=".14" />
        </linearGradient>
        <linearGradient id="benefits-pane-front" x1="19" y1="34" x2="95" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="#92E8FF" stopOpacity=".38" />
          <stop offset=".55" stopColor="#348BDC" stopOpacity=".3" />
          <stop offset="1" stopColor="#0C3B87" stopOpacity=".22" />
        </linearGradient>
        <linearGradient id="benefits-pane-edge" x1="20" y1="28" x2="112" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E1FAFF" stopOpacity=".9" />
          <stop offset=".55" stopColor="#73D6FF" stopOpacity=".8" />
          <stop offset="1" stopColor="#459EFF" stopOpacity=".55" />
        </linearGradient>
      </defs>
      <ellipse cx="65" cy="93" rx="48" ry="7" fill="#46B9FF" opacity=".11" />
      <path d="M49 9 107 18Q111 19 111 23L104 65Q103 69 99 68L41 59Q37 58 38 54L45 13Q46 9 49 9Z" fill="url(#benefits-pane-back)" stroke="#79D6FF" strokeOpacity=".55" strokeWidth="1.2" />
      <path d="M46 15 101 23" stroke="#D3F6FF" strokeOpacity=".65" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M38 21 96 30Q100 31 100 35L93 77Q92 81 88 80L30 71Q26 70 27 66L34 25Q35 21 38 21Z" fill="url(#benefits-pane-middle)" stroke="#8ADFFF" strokeOpacity=".72" strokeWidth="1.3" />
      <path d="M35 27 90 35" stroke="#D8F8FF" strokeOpacity=".7" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M27 33 85 42Q89 43 89 47L82 89Q81 93 77 92L19 83Q15 82 16 78L23 37Q24 33 27 33Z" fill="url(#benefits-pane-front)" stroke="url(#benefits-pane-edge)" strokeWidth="1.5" />
      <path d="M24 39 80 47" stroke="#F0FDFF" strokeOpacity=".72" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M34 56 63 60M32 66 54 69" stroke="#D5F8FF" strokeOpacity=".8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M57 69 68 71 75 63" stroke="#B2F0FF" strokeOpacity=".9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="71" cy="57" r="3.3" fill="#A6EBFF" fillOpacity=".85" />
      <circle cx="71" cy="57" r="7" stroke="#82DFFF" strokeOpacity=".32" />
      <path d="M89 58 98 56M96 43 106 41" stroke="#8EDCFF" strokeOpacity=".55" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
export function Benefits({ locale }: Props) {
  const tr = t[locale];
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const active = hovered ?? focused ?? selected;
  const benefits: { num: string; title: string; desc: string; icon: BenefitIcon }[] = [
    { num: tr.benefit1_num, title: tr.benefit1_title, desc: tr.benefit1_desc, icon: 'screen' },
    { num: tr.benefit2_num, title: tr.benefit2_title, desc: tr.benefit2_desc, icon: 'flow' },
    { num: tr.benefit3_num, title: tr.benefit3_title, desc: tr.benefit3_desc, icon: 'shield' },
    { num: tr.benefit4_num, title: tr.benefit4_title, desc: tr.benefit4_desc, icon: 'growth' },
  ];

  return (
    <section className="benefits-section relative overflow-hidden py-24 md:py-32">
      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:gap-8">
          <div className="benefits-copy max-w-[520px]">
            <div className="benefits-rule mb-5" aria-hidden="true" />
            <p className="benefits-eyebrow mb-4">{tr.benefits_eyebrow}</p>
            <h2 className="benefits-heading text-[38px] font-bold leading-[1.12] tracking-[-0.035em] sm:text-[48px] xl:text-[52px]">
              {tr.benefits_heading}
            </h2>
            <p className="benefits-intro mt-7 max-w-[440px] text-[16px] leading-[1.8] sm:text-[17px]">
              {tr.benefits_intro}
            </p>
          </div>

          <div className="benefits-visual min-w-0">
            <div className="benefits-orbit">
              <svg className="benefits-orbit-lines" viewBox="0 0 680 540" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="benefits-ring-gradient" x1="0" y1="0" x2="680" y2="540" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#48A6ED" stopOpacity=".08" />
                    <stop offset=".52" stopColor="#A2E9FF" stopOpacity=".5" />
                    <stop offset="1" stopColor="#397FD0" stopOpacity=".1" />
                  </linearGradient>
                  <radialGradient id="benefits-halo">
                    <stop stopColor="#58AFFF" stopOpacity=".16" />
                    <stop offset=".7" stopColor="#58AFFF" stopOpacity=".055" />
                    <stop offset="1" stopColor="#58AFFF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="340" cy="270" r="215" fill="url(#benefits-halo)" />
                <circle className="benefits-orbit-ring" cx="340" cy="270" r="195" stroke="url(#benefits-ring-gradient)" strokeWidth="1" />
                <circle className="benefits-orbit-shimmer" cx="340" cy="270" r="147" stroke="rgba(133,211,255,.28)" strokeWidth="1" strokeDasharray="2 9" />
                <circle cx="340" cy="270" r="110" stroke="rgba(145,216,255,.21)" strokeWidth="1" />
                <path className={`benefits-link ${active === 0 ? 'is-active' : ''}`} d="M340 270 340 88" />
                <path className={`benefits-link ${active === 1 ? 'is-active' : ''}`} d="M340 270 538 270" />
                <path className={`benefits-link ${active === 2 ? 'is-active' : ''}`} d="M340 270 340 452" />
                <path className={`benefits-link ${active === 3 ? 'is-active' : ''}`} d="M340 270 142 270" />
              </svg>
              <div className="benefits-core">
                <div className="benefits-core-glow" aria-hidden="true" />
                <HolographicWorkspaceVisual />
                <span className="benefits-core-label">{tr.benefits_core}</span>
              </div>
              {benefits.map((benefit, index) => (
                <button
                  key={benefit.num}
                  type="button"
                  className={`benefits-node benefits-node-${index + 1} ${active === index ? 'is-active' : ''}`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setFocused(index)}
                  onBlur={() => setFocused(null)}
                  onClick={() => setSelected(index)}
                  aria-pressed={selected === index}
                  aria-describedby="benefits-detail"
                >
                  <span className="benefits-node-icon"><OrbitIcon kind={benefit.icon} /></span>
                  <span className="benefits-node-copy">
                    <span className="benefits-node-num">{benefit.num}</span>
                    <span className="benefits-node-title">{benefit.title}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="benefits-detail" id="benefits-detail" aria-live="polite">
              <div className="benefits-detail-content" key={`${locale}-${active}`}>
                <span className="benefits-detail-num">{benefits[active].num}</span>
                <p>{benefits[active].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}