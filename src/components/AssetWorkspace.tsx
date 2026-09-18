import { useState, useEffect } from 'react';
import React from 'react';
import { Locale, t } from '../i18n/translations';
import viaImage from '../../assets/workspace-via.png';
import adImage from '../../assets/workspace-tkqc.png';
import bmImage from '../../assets/workspace-bm.png';
import pageImage from '../../assets/workspace-page.png';
import pixelImage from '../../assets/workspace-pixel.png';

interface Props { locale: Locale }

type AssetKey = 'via' | 'ad' | 'bm' | 'page' | 'pixel';

interface AssetModule {
  key: AssetKey;
  label: string;
  subtitle: string;
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  chips: string[];
  cap: { title: string; desc: string }[];
}

const workspaceImages = [viaImage, adImage, bmImage, pageImage, pixelImage];

/* ── Module icons ── */
const assetIcons: Record<AssetKey, React.ReactElement> = {
  via: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="3" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 15.5C5.5 13.5 7.5 12 10 12s4.5 1.5 5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  ad: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 13V9M9 13V7M12 13V10M15 13V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  bm: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  page: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  pixel: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 10 L10 3 L17 10 L10 17 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  ),
};

/* ── Capability card mini SVG visuals per module ── */
const capVisuals: Record<AssetKey, React.ReactElement[]> = {
  via: [
    /* Browser window */
    <svg key="v1" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="1" y="1" width="34" height="26" rx="4" stroke="rgba(77,156,255,0.50)" strokeWidth="1.2" fill="rgba(4,16,42,0.6)" />
      <rect x="1" y="1" width="34" height="8" rx="4" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.30)" strokeWidth="1.2" />
      <circle cx="7" cy="5" r="1.5" fill="rgba(77,156,255,0.55)" />
      <circle cx="12" cy="5" r="1.5" fill="rgba(77,156,255,0.35)" />
      <circle cx="17" cy="5" r="1.5" fill="rgba(77,156,255,0.25)" />
      <rect x="5" y="14" width="26" height="2" rx="1" fill="rgba(77,156,255,0.25)" />
      <rect x="5" y="19" width="18" height="2" rx="1" fill="rgba(77,156,255,0.18)" />
    </svg>,
    /* Pulse health line */
    <svg key="v2" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M2 14 L8 14 L11 7 L15 21 L19 10 L23 14 L34 14"
        stroke="rgba(77,156,255,0.65)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="23" cy="14" r="2" fill="rgba(47,128,255,0.55)" stroke="rgba(114,199,255,0.80)" strokeWidth="1" />
    </svg>,
    /* Network signal */
    <svg key="v3" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M18 22 C18 22 6 14 6 8 a12 12 0 0 1 24 0 C30 14 18 22 18 22Z" stroke="rgba(77,156,255,0.38)" strokeWidth="1" fill="none" />
      <circle cx="18" cy="8" r="3" fill="rgba(47,128,255,0.40)" stroke="rgba(77,156,255,0.70)" strokeWidth="1.2" />
      <circle cx="18" cy="8" r="1.2" fill="rgba(114,199,255,0.80)" />
      <path d="M10 21 L18 14 L26 21" stroke="rgba(77,156,255,0.30)" strokeWidth="1" strokeLinecap="round" fill="none" />
    </svg>,
    /* Shield */
    <svg key="v4" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M18 3 L30 8 L30 16 C30 21 24 25 18 27 C12 25 6 21 6 16 L6 8 Z"
        stroke="rgba(77,156,255,0.55)" strokeWidth="1.3" fill="rgba(47,128,255,0.10)" />
      <path d="M13 14 L17 18 L24 11" stroke="rgba(114,199,255,0.80)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ],
  ad: [
    /* Sparkline / amount */
    <svg key="a1" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M3 22 L10 16 L16 19 L23 10 L30 13 L34 8"
        stroke="rgba(77,156,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="34" cy="8" r="2" fill="rgba(114,199,255,0.80)" />
      <rect x="3" y="24" width="30" height="1.5" rx="0.75" fill="rgba(77,156,255,0.20)" />
    </svg>,
    /* User roles */
    <svg key="a2" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="12" cy="10" r="4" stroke="rgba(77,156,255,0.55)" strokeWidth="1.3" fill="rgba(47,128,255,0.12)" />
      <circle cx="24" cy="10" r="4" stroke="rgba(77,156,255,0.45)" strokeWidth="1.3" fill="rgba(47,128,255,0.08)" />
      <path d="M4 24 C4 20 7.6 17 12 17" stroke="rgba(77,156,255,0.40)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M16 24 C16 20 19.6 17 24 17 C28.4 17 32 20 32 24" stroke="rgba(77,156,255,0.35)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>,
    /* Payment card */
    <svg key="a3" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="2" y="5" width="32" height="20" rx="3" stroke="rgba(77,156,255,0.50)" strokeWidth="1.3" fill="rgba(4,16,42,0.65)" />
      <rect x="2" y="11" width="32" height="5" fill="rgba(47,128,255,0.18)" />
      <rect x="6" y="19" width="10" height="2.5" rx="1.25" fill="rgba(77,156,255,0.40)" />
      <rect x="22" y="19" width="10" height="2.5" rx="1.25" fill="rgba(77,156,255,0.28)" />
    </svg>,
    /* Connected steps */
    <svg key="a4" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="2" y="11" width="8" height="8" rx="2" fill="rgba(47,128,255,0.15)" stroke="rgba(77,156,255,0.55)" strokeWidth="1.2" />
      <rect x="14" y="11" width="8" height="8" rx="2" fill="rgba(47,128,255,0.12)" stroke="rgba(77,156,255,0.45)" strokeWidth="1.2" />
      <rect x="26" y="11" width="8" height="8" rx="2" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.38)" strokeWidth="1.2" />
      <path d="M10 15 L14 15" stroke="rgba(77,156,255,0.50)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M22 15 L26 15" stroke="rgba(77,156,255,0.40)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>,
  ],
  bm: [
    /* Partner nodes */
    <svg key="b1" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="18" cy="8" r="4" fill="rgba(47,128,255,0.18)" stroke="rgba(77,156,255,0.65)" strokeWidth="1.3" />
      <circle cx="6" cy="22" r="3" fill="rgba(47,128,255,0.12)" stroke="rgba(77,156,255,0.45)" strokeWidth="1.2" />
      <circle cx="30" cy="22" r="3" fill="rgba(47,128,255,0.12)" stroke="rgba(77,156,255,0.42)" strokeWidth="1.2" />
      <line x1="18" y1="12" x2="8" y2="19" stroke="rgba(77,156,255,0.35)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="12" x2="28" y2="19" stroke="rgba(77,156,255,0.30)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>,
    /* Admin badge */
    <svg key="b2" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="18" cy="12" r="5" fill="rgba(47,128,255,0.15)" stroke="rgba(77,156,255,0.60)" strokeWidth="1.3" />
      <path d="M14 23 C14 19.7 15.8 17 18 17 C20.2 17 22 19.7 22 23" stroke="rgba(77,156,255,0.45)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="15" r="3.5" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.38)" strokeWidth="1.1" />
      <circle cx="28" cy="15" r="3.5" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.35)" strokeWidth="1.1" />
    </svg>,
    /* Asset network */
    <svg key="b3" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="14" y="2" width="8" height="6" rx="1.5" fill="rgba(47,128,255,0.15)" stroke="rgba(77,156,255,0.58)" strokeWidth="1.2" />
      <rect x="2" y="20" width="8" height="6" rx="1.5" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.40)" strokeWidth="1.1" />
      <rect x="14" y="20" width="8" height="6" rx="1.5" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.38)" strokeWidth="1.1" />
      <rect x="26" y="20" width="8" height="6" rx="1.5" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.36)" strokeWidth="1.1" />
      <line x1="18" y1="8" x2="6" y2="20" stroke="rgba(77,156,255,0.28)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="8" x2="18" y2="20" stroke="rgba(77,156,255,0.28)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="8" x2="30" y2="20" stroke="rgba(77,156,255,0.28)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>,
    /* Verified badge */
    <svg key="b4" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M18 2 L22 6 L28 5 L30 11 L35 15 L30 19 L28 25 L22 24 L18 28 L14 24 L8 25 L6 19 L1 15 L6 11 L8 5 L14 6 Z"
        stroke="rgba(77,156,255,0.52)" strokeWidth="1.2" fill="rgba(47,128,255,0.10)" />
      <path d="M12 14 L16 18 L24 10" stroke="rgba(114,199,255,0.80)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ],
  page: [
    /* Publish doc */
    <svg key="p1" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="7" y="2" width="22" height="26" rx="3" stroke="rgba(77,156,255,0.50)" strokeWidth="1.3" fill="rgba(4,16,42,0.65)" />
      <path d="M25 2 L25 8 L31 8" stroke="rgba(77,156,255,0.38)" strokeWidth="1" />
      <rect x="11" y="11" width="14" height="1.8" rx="0.9" fill="rgba(77,156,255,0.40)" />
      <rect x="11" y="15" width="10" height="1.8" rx="0.9" fill="rgba(77,156,255,0.28)" />
      <rect x="11" y="19" width="12" height="1.8" rx="0.9" fill="rgba(77,156,255,0.22)" />
    </svg>,
    /* Role user */
    <svg key="p2" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="14" cy="11" r="4.5" stroke="rgba(77,156,255,0.55)" strokeWidth="1.3" fill="rgba(47,128,255,0.12)" />
      <path d="M5 26 C5 21.6 9.1 18 14 18 C18.9 18 23 21.6 23 26" stroke="rgba(77,156,255,0.42)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <rect x="26" y="8" width="7" height="5" rx="1.2" fill="rgba(47,128,255,0.12)" stroke="rgba(77,156,255,0.40)" strokeWidth="1.1" />
      <rect x="26" y="15" width="7" height="5" rx="1.2" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.32)" strokeWidth="1.1" />
    </svg>,
    /* Eligibility check */
    <svg key="p3" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="18" cy="14" r="11" stroke="rgba(77,156,255,0.35)" strokeWidth="1.2" fill="rgba(47,128,255,0.06)" />
      <circle cx="18" cy="14" r="7" stroke="rgba(77,156,255,0.45)" strokeWidth="1.2" fill="rgba(47,128,255,0.08)" />
      <path d="M13 14 L17 18 L24 11" stroke="rgba(114,199,255,0.80)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    /* Audience chart */
    <svg key="p4" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <rect x="4" y="18" width="5" height="8" rx="1.5" fill="rgba(77,156,255,0.42)" />
      <rect x="12" y="12" width="5" height="14" rx="1.5" fill="rgba(77,156,255,0.55)" />
      <rect x="20" y="8" width="5" height="18" rx="1.5" fill="rgba(114,199,255,0.52)" />
      <rect x="28" y="14" width="5" height="12" rx="1.5" fill="rgba(77,156,255,0.40)" />
      <line x1="2" y1="27" x2="34" y2="27" stroke="rgba(77,156,255,0.28)" strokeWidth="1" strokeLinecap="round" />
    </svg>,
  ],
  pixel: [
    /* Event pulse */
    <svg key="px1" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M2 14 L7 14 L10 6 L14 22 L18 10 L22 18 L26 14 L34 14"
        stroke="rgba(77,156,255,0.62)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="18" cy="10" r="2" fill="rgba(114,199,255,0.75)" />
    </svg>,
    /* Sharing nodes */
    <svg key="px2" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="18" cy="14" r="4" fill="rgba(47,128,255,0.18)" stroke="rgba(77,156,255,0.65)" strokeWidth="1.3" />
      <circle cx="4" cy="8" r="3" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.45)" strokeWidth="1.1" />
      <circle cx="32" cy="8" r="3" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.42)" strokeWidth="1.1" />
      <circle cx="4" cy="22" r="3" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.38)" strokeWidth="1.1" />
      <circle cx="32" cy="22" r="3" fill="rgba(47,128,255,0.10)" stroke="rgba(77,156,255,0.36)" strokeWidth="1.1" />
      <line x1="18" y1="10" x2="7" y2="8"  stroke="rgba(77,156,255,0.32)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="10" x2="29" y2="8"  stroke="rgba(77,156,255,0.28)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="18" x2="7" y2="22" stroke="rgba(77,156,255,0.28)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="18" y1="18" x2="29" y2="22" stroke="rgba(77,156,255,0.25)" strokeWidth="1" strokeDasharray="2 2" />
    </svg>,
    /* Connection waveform */
    <svg key="px3" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <path d="M2 14 C4 14 5 8 7 8 C9 8 10 20 12 20 C14 20 15 11 17 11 C19 11 20 17 22 17 C24 17 25 13 27 13 C29 13 30 15 34 15"
        stroke="rgba(77,156,255,0.58)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>,
    /* Diagnostic radar */
    <svg key="px4" width="36" height="28" viewBox="0 0 36 28" fill="none">
      <circle cx="18" cy="14" r="12" stroke="rgba(77,156,255,0.22)" strokeWidth="1" fill="none" />
      <circle cx="18" cy="14" r="8" stroke="rgba(77,156,255,0.28)" strokeWidth="1" fill="none" />
      <circle cx="18" cy="14" r="4" stroke="rgba(77,156,255,0.38)" strokeWidth="1" fill="rgba(47,128,255,0.10)" />
      <path d="M18 14 L26 6" stroke="rgba(77,156,255,0.60)" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="26" cy="6" r="2" fill="rgba(114,199,255,0.75)" />
    </svg>,
  ],
};

export function AssetWorkspace({ locale }: Props) {
  const [active, setActive] = useState<AssetKey>('via');
  const [visible, setVisible] = useState<AssetKey>('via');
  const [transitioning, setTransitioning] = useState(false);
  const tr = t[locale];
  useEffect(() => {
    workspaceImages.forEach(src => {
      const image = new Image();
      image.src = src;
      void image.decode().catch(() => {});
    });
  }, []);

  function switchModule(key: AssetKey) {
    if (key === active || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(key);
      setVisible(key);
      setTransitioning(false);
    }, 160);
  }

  const modules: AssetModule[] = [
    { key: 'via', label: 'VIA', subtitle: tr.asset_via_desc, image: viaImage, eyebrow: tr.asset_via_eyebrow,   title: tr.asset_via_title,   body: tr.asset_via_body,
      chips: [tr.asset_via_badge1, tr.asset_via_badge2, tr.asset_via_badge3, tr.asset_via_badge4],
      cap: [
        { title: tr.asset_via_cap1_title, desc: tr.asset_via_cap1_desc },
        { title: tr.asset_via_cap2_title, desc: tr.asset_via_cap2_desc },
        { title: tr.asset_via_cap3_title, desc: tr.asset_via_cap3_desc },
        { title: tr.asset_via_cap4_title, desc: tr.asset_via_cap4_desc },
      ] },
    { key: 'ad', label: 'Ad', subtitle: tr.asset_ad_desc, image: adImage, eyebrow: tr.asset_ad_eyebrow,    title: tr.asset_ad_title,    body: tr.asset_ad_body,
      chips: [tr.asset_ad_badge1, tr.asset_ad_badge2, tr.asset_ad_badge3, tr.asset_ad_badge4],
      cap: [
        { title: tr.asset_ad_cap1_title, desc: tr.asset_ad_cap1_desc },
        { title: tr.asset_ad_cap2_title, desc: tr.asset_ad_cap2_desc },
        { title: tr.asset_ad_cap3_title, desc: tr.asset_ad_cap3_desc },
        { title: tr.asset_ad_cap4_title, desc: tr.asset_ad_cap4_desc },
      ] },
    { key: 'bm', label: 'BM', subtitle: tr.asset_bm_desc, image: bmImage, eyebrow: tr.asset_bm_eyebrow,    title: tr.asset_bm_title,    body: tr.asset_bm_body,
      chips: [tr.asset_bm_badge1, tr.asset_bm_badge2, tr.asset_bm_badge3, tr.asset_bm_badge4],
      cap: [
        { title: tr.asset_bm_cap1_title, desc: tr.asset_bm_cap1_desc },
        { title: tr.asset_bm_cap2_title, desc: tr.asset_bm_cap2_desc },
        { title: tr.asset_bm_cap3_title, desc: tr.asset_bm_cap3_desc },
        { title: tr.asset_bm_cap4_title, desc: tr.asset_bm_cap4_desc },
      ] },
    { key: 'page', label: 'Page', subtitle: tr.asset_page_desc, image: pageImage, eyebrow: tr.asset_page_eyebrow,  title: tr.asset_page_title,  body: tr.asset_page_body,
      chips: [tr.asset_page_badge1, tr.asset_page_badge2, tr.asset_page_badge3, tr.asset_page_badge4],
      cap: [
        { title: tr.asset_page_cap1_title, desc: tr.asset_page_cap1_desc },
        { title: tr.asset_page_cap2_title, desc: tr.asset_page_cap2_desc },
        { title: tr.asset_page_cap3_title, desc: tr.asset_page_cap3_desc },
        { title: tr.asset_page_cap4_title, desc: tr.asset_page_cap4_desc },
      ] },
    { key: 'pixel', label: 'Pixel', subtitle: tr.asset_pixel_desc, image: pixelImage, eyebrow: tr.asset_pixel_eyebrow, title: tr.asset_pixel_title, body: tr.asset_pixel_body,
      chips: [tr.asset_pixel_badge1, tr.asset_pixel_badge2, tr.asset_pixel_badge3, tr.asset_pixel_badge4],
      cap: [
        { title: tr.asset_pixel_cap1_title, desc: tr.asset_pixel_cap1_desc },
        { title: tr.asset_pixel_cap2_title, desc: tr.asset_pixel_cap2_desc },
        { title: tr.asset_pixel_cap3_title, desc: tr.asset_pixel_cap3_desc },
        { title: tr.asset_pixel_cap4_title, desc: tr.asset_pixel_cap4_desc },
      ] },
  ];

  const mod = modules.find(module => module.key === visible)!;
  const visuals = capVisuals[visible];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(47,128,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="mb-14 md:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[2px] rounded-full" style={{ background: 'linear-gradient(90deg, #2F80FF, #72C7FF)' }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#4D9CFF' }}>
              {tr.asset_eyebrow}
            </span>
          </div>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1] mb-4" style={{ color: '#F5F8FF' }}>
            {tr.asset_heading_1}
            <br />
            <span style={{ color: '#4D9CFF' }}>
              {tr.asset_heading_2}
            </span>
          </h2>
          <p className="text-[16px] leading-[1.65] max-w-[600px]" style={{ color: '#A9BDDF' }}>
            {tr.asset_desc}
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT — Asset Navigator */}
          {/* Mobile: horizontal scroll row */}
          <div className="flex flex-row gap-2 lg:hidden overflow-x-auto pb-1">
            {modules.map(asset => {
              const isActive = asset.key === active;
              return (
                <button
                  key={asset.key}
                  onClick={() => switchModule(asset.key)}
                  className="flex-shrink-0 flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-left w-[165px]"
                  style={{
                    background: isActive ? 'rgba(14,39,82,0.92)' : 'rgba(14,39,82,0.30)',
                    border: isActive ? '1px solid rgba(104,165,255,0.38)' : '1px solid rgba(104,165,255,0.10)',
                    borderLeft: isActive ? '3px solid #2F80FF' : '3px solid transparent',
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: isActive ? 'rgba(47,128,255,0.20)' : 'rgba(47,128,255,0.06)', color: isActive ? '#4D9CFF' : '#7F96B8' }}>
                    {assetIcons[asset.key]}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-bold truncate" style={{ color: isActive ? '#F5F8FF' : '#A9BDDF' }}>{asset.label}</div>
                    <div className="text-[10px] mt-0.5 leading-tight break-words" style={{ color: '#5E7A9C' }}>{asset.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop: glass shell sidebar */}
          <div
            className="hidden lg:flex flex-col flex-shrink-0"
            style={{
              width: 296,
              background: 'rgba(5,17,44,0.72)',
              border: '1px solid rgba(80,140,220,0.16)',
              borderRadius: 20,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 1px 0 rgba(120,180,255,0.08)',
              padding: '10px 10px 10px 10px',
            }}
          >
            {/* Asset buttons */}
            <div className="flex flex-col gap-1.5">
              {modules.map(asset => {
                const isActive = asset.key === active;
                return (
                  <button
                    key={asset.key}
                    onClick={() => switchModule(asset.key)}
                    className="flex items-center gap-3 px-3.5 py-3.5 rounded-[14px] text-left w-full"
                    style={{
                      background: isActive ? 'rgba(14,39,82,0.92)' : 'transparent',
                      border: isActive ? '1px solid rgba(104,165,255,0.36)' : '1px solid transparent',
                      boxShadow: isActive ? '0 0 16px rgba(47,128,255,0.08)' : 'none',
                      borderLeft: isActive ? '3px solid #2F80FF' : '3px solid transparent',
                      transform: isActive ? 'translateX(2px)' : 'none',
                      transition: 'all 220ms cubic-bezier(0.25,0,0.2,1)',
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(14,39,82,0.45)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateX(2px)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                        (e.currentTarget as HTMLElement).style.transform = 'none';
                      }
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive ? 'rgba(47,128,255,0.22)' : 'rgba(47,128,255,0.06)',
                        color: isActive ? '#4D9CFF' : '#7F96B8',
                        transition: 'all 220ms ease',
                      }}
                    >
                      {assetIcons[asset.key]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-bold tracking-[-0.01em] truncate"
                        style={{ color: isActive ? '#F5F8FF' : '#A9BDDF', transition: 'color 200ms ease' }}>
                        {asset.label}
                      </div>
                      <div className="text-[11px] mt-0.5 leading-snug break-words" style={{ color: '#5E7A9C' }}>
                        {asset.subtitle}
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0"
                      style={{ color: isActive ? '#4D9CFF' : '#3A5570', opacity: isActive ? 1 : 0.5, transition: 'all 200ms ease' }}>
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Footer summary */}
            <div className="mt-auto pt-3">
              <div
                className="rounded-[12px] px-3.5 py-3"
                style={{
                  background: 'rgba(4,13,34,0.65)',
                  border: '1px solid rgba(77,156,255,0.12)',
                }}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(47,128,255,0.12)', color: '#4D9CFF' }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                      <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                      <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                      <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  </div>
                  <span className="text-[12px] font-semibold" style={{ color: '#C2D4EE' }}>
                    {tr.asset_sidebar_footer_title}
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed pl-[34px]" style={{ color: '#4D6A8C' }}>
                  {tr.asset_sidebar_footer_desc}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Module Showcase */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Transitioning wrapper */}
            <div
              style={{
                display: 'contents',
                opacity: transitioning ? 0 : 1,
                transform: transitioning ? 'translateY(6px)' : 'translateY(0)',
                transition: 'opacity 160ms ease, transform 160ms ease',
              }}
            >
              {/* ── Module Header ── */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{
                  background: 'rgba(6,22,54,0.72)',
                  border: '1px solid rgba(104,165,255,0.16)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Subtle inner top highlight */}
                <div className="absolute top-0 left-[8%] right-[8%] h-px pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(120,180,255,0.20), transparent)' }} />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(47,128,255,0.16)', color: '#4D9CFF' }}>
                        {assetIcons[visible]}
                      </div>
                      <span className="text-[10px] font-semibold tracking-[0.16em] uppercase" style={{ color: '#4D9CFF' }}>
                        {mod.eyebrow}
                      </span>
                    </div>

                    {/* Title + chips */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-[22px] md:text-[26px] font-bold tracking-[-0.02em]" style={{ color: '#F5F8FF' }}>
                        {mod.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.chips.map((chip, ci) => (
                          <span key={ci}
                            className="px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold tracking-[0.04em]"
                            style={{
                              background: 'rgba(47,128,255,0.10)',
                              border: '1px solid rgba(104,165,255,0.20)',
                              color: '#72C7FF',
                            }}>
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-[14px] leading-[1.65] max-w-[520px]" style={{ color: '#A9BDDF' }}>
                      {mod.body}
                    </p>
                  </div>

                  {/* Decorative mini visual — header right */}
                  <div className="hidden md:flex flex-shrink-0 opacity-55 pt-1">
                    {assetIcons[visible] && (
                      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ opacity: 0.30 }}>
                        <circle cx="26" cy="26" r="25" stroke="rgba(77,156,255,0.35)" strokeWidth="1" fill="none" />
                        <circle cx="26" cy="26" r="17" stroke="rgba(77,156,255,0.25)" strokeWidth="1" fill="rgba(47,128,255,0.06)" />
                        <circle cx="26" cy="26" r="9"  stroke="rgba(77,156,255,0.40)" strokeWidth="1" fill="rgba(47,128,255,0.10)" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Workspace screenshot preview ── */}
              <div
                className="workspace-preview-panel rounded-2xl overflow-hidden relative"
                style={{
                  border: '1px solid rgba(104,165,255,0.28)',
                  aspectRatio: '1718 / 1303',
                  boxShadow: '0 0 36px rgba(47,128,255,0.10)',
                }}
              >
                <img
                  key={visible}
                  src={mod.image}
                  alt={mod.title}
                  className="workspace-preview-image"
                  decoding="async"
                />
              </div>
              {/* ── 4 Capability cards ── */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {mod.cap.map((cap, i) => (
                  <CapCard key={`${visible}-${i}`} title={cap.title} desc={cap.desc} visual={visuals[i]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Capability card sub-component */
function CapCard({ title, desc, visual }: { title: string; desc: string; visual: React.ReactElement }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-[14px] cursor-default relative overflow-hidden"
      style={{
        minHeight: 122,
        padding: '14px 14px 16px 14px',
        background: hovered ? 'rgba(10,28,68,0.85)' : 'rgba(8,22,54,0.62)',
        border: hovered ? '1px solid rgba(104,165,255,0.28)' : '1px solid rgba(104,165,255,0.13)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 24px rgba(1,6,22,0.55)' : '0 2px 8px rgba(1,6,22,0.35)',
        transition: 'all 220ms cubic-bezier(0.25,0,0.2,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Inner top highlight */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(120,180,255,0.14), transparent)' }} />

      {/* Mini visual - top right */}
      <div style={{
        position: 'absolute', top: 12, right: 10,
        opacity: hovered ? 0.92 : 0.62,
        transition: 'opacity 200ms ease',
        pointerEvents: 'none',
      }}>
        {visual}
      </div>

      {/* Content */}
      <div className="relative z-10 pt-9">
        <div className="text-[13px] font-bold mb-2 leading-snug" style={{ color: hovered ? '#FFFFFF' : '#E4EEF8', transition: 'color 200ms ease' }}>
          {title}
        </div>
        <div className="text-[12px] leading-[1.58]" style={{ color: hovered ? '#A9BDDF' : '#6B87A8', transition: 'color 200ms ease' }}>
          {desc}
        </div>
      </div>
    </div>
  );
}
