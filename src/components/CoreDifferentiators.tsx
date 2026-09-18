import { useState, useEffect } from 'react';
import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }

/* ══════════════════════════════════════════════════════════
   CARD 1 — WORKFLOW
   3 glass mini-tiles: Doc → Chart → Done, curved paths
   ══════════════════════════════════════════════════════════ */
function WorkflowVisual({ active }: { active: boolean }) {
  return (
    <svg width="155" height="128" viewBox="0 0 155 128" fill="none" aria-hidden style={{ display: 'block' }}>

      {/* ── Curved connector paths ── */}
      <path d="M55 34 C68 34 70 18 83 18"
        stroke="rgba(77,156,255,0.24)" strokeWidth="1.4" strokeDasharray="3 2.5" fill="none" />
      <path d="M113 34 C122 34 124 54 133 54"
        stroke="rgba(77,156,255,0.20)" strokeWidth="1.4" strokeDasharray="3 2.5" fill="none" />

      {active && (
        <>
          <path d="M55 34 C68 34 70 18 83 18"
            stroke="rgba(114,199,255,0.72)" strokeWidth="1.5" fill="none" className="feat-node-1" />
          <path d="M113 34 C122 34 124 54 133 54"
            stroke="rgba(114,199,255,0.65)" strokeWidth="1.5" fill="none" className="feat-node-2" />
        </>
      )}

      {/* ── Tile 1: Document (bottom-left) ── */}
      <rect x="2" y="18" width="53" height="40" rx="7"
        fill="rgba(4,16,42,0.84)" stroke="rgba(77,156,255,0.38)" strokeWidth="1.2" />
      <line x1="12" y1="29" x2="44" y2="29" stroke="rgba(114,199,255,0.48)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="35" x2="38" y2="35" stroke="rgba(114,199,255,0.30)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="12" y1="41" x2="32" y2="41" stroke="rgba(114,199,255,0.22)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M43 18 L53 27" stroke="rgba(77,156,255,0.32)" strokeWidth="1" />
      <circle cx="55" cy="34" r="3" fill="rgba(47,128,255,0.55)" stroke="rgba(77,156,255,0.82)" strokeWidth="1" />

      {/* ── Tile 2: Chart (top-center) ── */}
      <rect x="83" y="4" width="53" height="40" rx="7"
        fill="rgba(4,16,42,0.84)" stroke="rgba(77,156,255,0.33)" strokeWidth="1.2" />
      <rect x="94" y="26" width="5" height="12" rx="1.5" fill="rgba(77,156,255,0.52)" />
      <rect x="103" y="20" width="5" height="18" rx="1.5" fill="rgba(77,156,255,0.68)" />
      <rect x="112" y="14" width="5" height="24" rx="1.5" fill="rgba(114,199,255,0.58)" />
      <rect x="121" y="22" width="5" height="16" rx="1.5" fill="rgba(77,156,255,0.42)" />
      <circle cx="110" cy="34" r="2.8" fill="rgba(47,128,255,0.50)" stroke="rgba(77,156,255,0.76)" strokeWidth="1" />

      {/* ── Tile 3: Done (mid-right) ── */}
      <rect x="113" y="44" width="40" height="40" rx="7"
        fill="rgba(4,16,42,0.84)" stroke="rgba(77,156,255,0.30)" strokeWidth="1.2" />
      <path d="M124 65 L130 71 L145 54"
        stroke="rgba(114,199,255,0.78)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="133" cy="63" r="10" stroke="rgba(77,156,255,0.20)" strokeWidth="1" fill="none" />

      {/* ── Hover: tiles glow in sequence ── */}
      {active && (
        <>
          <rect x="2" y="18" width="53" height="40" rx="7"
            fill="rgba(47,128,255,0.08)" stroke="rgba(114,199,255,0.78)" strokeWidth="1.4"
            className="feat-node-0" />
          <rect x="83" y="4" width="53" height="40" rx="7"
            fill="rgba(47,128,255,0.07)" stroke="rgba(114,199,255,0.72)" strokeWidth="1.4"
            className="feat-node-1" />
          <rect x="113" y="44" width="40" height="40" rx="7"
            fill="rgba(47,128,255,0.07)" stroke="rgba(114,199,255,0.70)" strokeWidth="1.4"
            className="feat-node-2" />
        </>
      )}

      {/* Label */}
      <text x="2" y="118" fontSize="7.5" fontWeight="600" letterSpacing="0.13em"
        fill="rgba(77,156,255,0.32)" fontFamily="'Manrope', sans-serif">SEAMLESS FLOW</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   CARD 2 — CONTROL HUB
   Desktop + Tablet + Mobile cluster with orbit ring
   ══════════════════════════════════════════════════════════ */
function ControlHubVisual({ active }: { active: boolean }) {
  return (
    <svg width="155" height="128" viewBox="0 0 155 128" fill="none" aria-hidden style={{ display: 'block' }}>

      {/* Orbit ellipse */}
      <ellipse cx="78" cy="62" rx="64" ry="38"
        stroke="rgba(77,156,255,0.12)" strokeWidth="1" strokeDasharray="4 3" fill="none" />
      <ellipse cx="78" cy="62" rx="44" ry="25"
        stroke="rgba(77,156,255,0.09)" strokeWidth="1" strokeDasharray="3 4" fill="none" />

      {/* Orbit dots */}
      <circle cx="14" cy="62" r="2.5" fill="rgba(77,156,255,0.40)" />
      <circle cx="142" cy="62" r="2.5" fill="rgba(77,156,255,0.34)" />
      <circle cx="78" cy="24" r="2" fill="rgba(114,199,255,0.30)" />

      {/* Desktop (center-left, largest) */}
      <rect x="8" y="22" width="76" height="52" rx="5"
        fill="rgba(4,16,42,0.86)" stroke="rgba(77,156,255,0.44)" strokeWidth="1.4" />
      <rect x="14" y="27" width="64" height="36" rx="2"
        fill="rgba(14,39,82,0.55)" stroke="rgba(77,156,255,0.18)" strokeWidth="0.8" />
      <rect x="19" y="32" width="28" height="3" rx="1.5" fill="rgba(77,156,255,0.32)" />
      <rect x="19" y="38" width="46" height="2" rx="1" fill="rgba(77,156,255,0.20)" />
      <rect x="19" y="43" width="36" height="2" rx="1" fill="rgba(77,156,255,0.16)" />
      <rect x="19" y="48" width="22" height="6" rx="3" fill="rgba(47,128,255,0.38)" />
      {/* Stand */}
      <line x1="46" y1="74" x2="46" y2="84" stroke="rgba(77,156,255,0.28)" strokeWidth="1.5" />
      <line x1="36" y1="84" x2="56" y2="84" stroke="rgba(77,156,255,0.28)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tablet */}
      <rect x="96" y="28" width="28" height="42" rx="4"
        fill="rgba(4,16,42,0.82)" stroke="rgba(114,199,255,0.34)" strokeWidth="1.2" />
      <rect x="100" y="33" width="20" height="28" rx="1.5"
        fill="rgba(14,39,82,0.52)" stroke="rgba(77,156,255,0.14)" strokeWidth="0.7" />
      <circle cx="110" cy="67" r="1.8" stroke="rgba(114,199,255,0.38)" strokeWidth="1" fill="none" />

      {/* Mobile */}
      <rect x="130" y="38" width="18" height="32" rx="4"
        fill="rgba(4,16,42,0.82)" stroke="rgba(114,199,255,0.30)" strokeWidth="1.2" />
      <rect x="133" y="43" width="12" height="18" rx="1"
        fill="rgba(14,39,82,0.52)" stroke="rgba(77,156,255,0.12)" strokeWidth="0.7" />
      <rect x="136" y="64" width="6" height="1.8" rx="0.9" fill="rgba(114,199,255,0.32)" />

      {/* Sync lines */}
      <line x1="84" y1="48" x2="96" y2="48" stroke="rgba(77,156,255,0.26)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="124" y1="54" x2="130" y2="54" stroke="rgba(77,156,255,0.20)" strokeWidth="1" strokeDasharray="2 2" />

      {/* Hover: devices glow */}
      {active && (
        <>
          <rect x="8" y="22" width="76" height="52" rx="5"
            fill="rgba(47,128,255,0.09)" stroke="rgba(77,156,255,0.90)" strokeWidth="1.5"
            className="feat-dev-0" />
          <rect x="96" y="28" width="28" height="42" rx="4"
            fill="rgba(47,128,255,0.08)" stroke="rgba(114,199,255,0.86)" strokeWidth="1.4"
            className="feat-dev-1" />
          <rect x="130" y="38" width="18" height="32" rx="4"
            fill="rgba(47,128,255,0.07)" stroke="rgba(114,199,255,0.82)" strokeWidth="1.4"
            className="feat-dev-2" />
          <line x1="84" y1="48" x2="96" y2="48"
            stroke="rgba(114,199,255,0.68)" strokeWidth="1.4" className="feat-dev-1" />
          <line x1="124" y1="54" x2="130" y2="54"
            stroke="rgba(114,199,255,0.62)" strokeWidth="1.4" className="feat-dev-2" />
        </>
      )}

      {/* Label */}
      <text x="2" y="118" fontSize="7.5" fontWeight="600" letterSpacing="0.13em"
        fill="rgba(77,156,255,0.30)" fontFamily="'Manrope', sans-serif">ANYWHERE CONTROL</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   CARD 3 — PRIORITY
   Star + 2 orbit ellipses + orbital dots + sparkles
   ══════════════════════════════════════════════════════════ */
function PriorityVisual({ active }: { active: boolean }) {
  const starPath = 'M77 22 L82 37 L98 37 L85 47 L90 62 L77 52 L64 62 L69 47 L56 37 L72 37 Z';
  return (
    <svg width="155" height="128" viewBox="0 0 155 128" fill="none" aria-hidden style={{ display: 'block' }}>

      {/* Outer halo */}
      <circle cx="77" cy="44" r="46" stroke="rgba(47,128,255,0.07)" strokeWidth="1" fill="none" />

      {/* Orbit ellipses */}
      <ellipse cx="77" cy="44" rx="37" ry="22"
        stroke="rgba(77,156,255,0.18)" strokeWidth="1" strokeDasharray="4 3" fill="none"
        transform="rotate(-20 77 44)" />
      <ellipse cx="77" cy="44" rx="25" ry="15"
        stroke="rgba(77,156,255,0.22)" strokeWidth="1" strokeDasharray="3 3" fill="none"
        transform="rotate(25 77 44)" />

      {/* Orbital dots */}
      <circle cx="36" cy="44" r="2.8" fill="rgba(77,156,255,0.46)" />
      <circle cx="118" cy="44" r="2.4" fill="rgba(77,156,255,0.40)" />
      <circle cx="77" cy="10" r="2" fill="rgba(114,199,255,0.38)" />
      <circle cx="100" cy="76" r="1.8" fill="rgba(77,156,255,0.30)" />

      {/* Star center glow */}
      <circle cx="77" cy="44" r="15" fill="rgba(47,128,255,0.10)" />

      {/* Star */}
      <path d={starPath}
        fill="rgba(47,128,255,0.22)" stroke="rgba(77,156,255,0.68)" strokeWidth="1.4"
        strokeLinejoin="round" />

      {/* Hover: rings + star + sparkles */}
      {active && (
        <>
          <ellipse cx="77" cy="44" rx="37" ry="22"
            stroke="rgba(77,156,255,0.72)" strokeWidth="1.4" fill="none"
            transform="rotate(-20 77 44)" className="feat-ring-0" />
          <ellipse cx="77" cy="44" rx="25" ry="15"
            stroke="rgba(114,199,255,0.68)" strokeWidth="1.4" fill="none"
            transform="rotate(25 77 44)" className="feat-ring-1" />
          <path d={starPath}
            fill="rgba(47,128,255,0.40)" stroke="rgba(114,199,255,0.94)" strokeWidth="1.6"
            strokeLinejoin="round" className="feat-star" />
          <circle cx="77" cy="5"  r="2.4" fill="rgba(114,199,255,0.92)" className="feat-spark-0" />
          <circle cx="112" cy="18" r="2"  fill="rgba(114,199,255,0.86)" className="feat-spark-1" />
          <circle cx="42"  cy="18" r="2"  fill="rgba(114,199,255,0.86)" className="feat-spark-2" />
        </>
      )}

      {/* Label */}
      <text x="2" y="118" fontSize="7.5" fontWeight="600" letterSpacing="0.13em"
        fill="rgba(77,156,255,0.30)" fontFamily="'Manrope', sans-serif">SMARTER FOCUS</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   ICON TILES
   ══════════════════════════════════════════════════════════ */
const iconSvgs = [
  <svg key="wf" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#4D9CFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4H20M20 4L16 8" stroke="#72C7FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
    <path d="M8 20H20M20 20L16 16" stroke="#72C7FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
  </svg>,
  <svg key="ch" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="6" width="13" height="9" rx="1.5" stroke="#4D9CFF" strokeWidth="1.8" />
    <path d="M4 18H13" stroke="#4D9CFF" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="15" y="9" width="7" height="10" rx="1.5" stroke="#72C7FF" strokeWidth="1.5" />
    <path d="M18 17.5H19" stroke="#72C7FF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="pr" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="#4D9CFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const decorativeVisuals = [WorkflowVisual, ControlHubVisual, PriorityVisual];

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */
export function CoreDifferentiators({ locale }: Props) {
  const tr = t[locale];
  const [hovered, setHovered] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const cards = [
    { title: tr.diff_card1_title, desc: tr.diff_card1_desc },
    { title: tr.diff_card2_title, desc: tr.diff_card2_desc },
    { title: tr.diff_card3_title, desc: tr.diff_card3_desc },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32" style={{ background: 'transparent' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(47,128,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #2F80FF)' }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#4D9CFF' }}>
              {tr.diff_eyebrow}
            </span>
            <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #2F80FF, transparent)' }} />
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1]" style={{ color: '#F5F8FF' }}>
            {tr.diff_heading_1}
            <br />
            <span style={{ color: '#4D9CFF' }}>
              {tr.diff_heading_2}
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const isHovered = hovered === i;
            const Visual = decorativeVisuals[i];

            return (
              <div
                key={i}
                className="relative rounded-[24px] overflow-hidden cursor-default"
                style={{
                  minHeight: 296,
                  background: isHovered ? 'rgba(6,20,50,0.90)' : 'rgba(4,16,42,0.80)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: isHovered
                    ? '1px solid rgba(104,165,255,0.32)'
                    : '1px solid rgba(80,140,220,0.17)',
                  boxShadow: isHovered
                    ? '0 16px 48px rgba(1,6,22,0.75), 0 4px 18px rgba(47,128,255,0.10), inset 0 1px 0 rgba(120,180,255,0.11)'
                    : '0 4px 24px rgba(1,6,22,0.55), inset 0 1px 0 rgba(120,180,255,0.07)',
                  transform: isHovered && !reducedMotion ? 'translateY(-5px) scale(1.014)' : 'none',
                  transition: 'all 290ms cubic-bezier(0.25, 0, 0.20, 1)',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Inner top highlight */}
                <div
                  className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(120,180,255,0.22), transparent)', zIndex: 1 }}
                />

                {/* Hover spotlight */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 70% 28%, rgba(70,140,255,0.11), transparent 55%)', zIndex: 0 }} />
                )}

                {/* Light sweep */}
                {isHovered && !reducedMotion && (
                  <div className="feat-sweep absolute top-0 bottom-0 pointer-events-none"
                    style={{
                      left: 0, width: '55%',
                      background: 'linear-gradient(90deg, transparent, rgba(160,210,255,0.065), transparent)',
                      zIndex: 1,
                    }} />
                )}

                {/* ── Illustration: absolute top-right ── */}
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    right: 14,
                    zIndex: 2,
                    opacity: isHovered ? 1 : 0.60,
                    transition: 'opacity 260ms ease',
                    pointerEvents: 'none',
                  }}
                >
                  <Visual active={isHovered && !reducedMotion} />
                </div>

                {/* ── Icon tile: absolute top-left ── */}
                <div
                  style={{
                    position: 'absolute',
                    top: 28,
                    left: 28,
                    zIndex: 3,
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isHovered ? 'rgba(14,39,82,0.82)' : 'rgba(6,22,54,0.74)',
                    border: isHovered ? '1px solid rgba(104,165,255,0.36)' : '1px solid rgba(80,140,220,0.22)',
                    boxShadow: isHovered
                      ? 'inset 0 1px 0 rgba(120,180,255,0.12), 0 0 14px rgba(47,128,255,0.20)'
                      : 'inset 0 1px 0 rgba(120,180,255,0.08)',
                    transform: isHovered && !reducedMotion ? 'translateY(-2px) scale(1.04)' : 'none',
                    transition: 'all 260ms ease-out',
                  }}
                >
                  {iconSvgs[i]}
                </div>

                {/* ── Content zone: below icon, left-anchored ── */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 3,
                    paddingTop: 96,
                    paddingLeft: 28,
                    paddingRight: 28,
                    paddingBottom: 28,
                  }}
                >
                  {/* Thin separator */}
                  <div style={{
                    width: '45%',
                    height: 1,
                    marginBottom: 18,
                    background: 'linear-gradient(90deg, rgba(77,156,255,0.18), transparent)',
                  }} />

                  <h3
                    className="text-[19px] font-bold mb-3 tracking-[-0.01em]"
                    style={{ color: isHovered ? '#FFFFFF' : '#F5F8FF', transition: 'color 240ms ease' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.68]"
                    style={{ color: isHovered ? '#B8CEEC' : '#A9BDDF', transition: 'color 240ms ease' }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
