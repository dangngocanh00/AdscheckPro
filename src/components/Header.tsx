import { useState, useEffect, useRef } from 'react';
import { Locale, locales, t } from '../i18n/translations';
import logoSrc from '../../assets/log-removebg.png';
import { LanguageFlag } from './LanguageFlag';

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const tr = t[locale];
  const currentLocale = locales.find(l => l.code === locale)!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: tr.nav_intro, href: '#intro' },
    { label: tr.nav_features, href: '#features' },
    { label: tr.nav_workflow, href: '#workflow' },
    { label: tr.nav_control_hub, href: '#control-hub' },
    { label: tr.nav_faq, href: '#faq' },
  ];

  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(3, 17, 38, 0.90)'
          : 'rgba(3, 17, 38, 0.70)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(104,165,255,0.18)'
          : '1px solid transparent',
      }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src={logoSrc}
              alt="Adscheck"
              className="w-8 h-8 object-contain"
              style={{ filter: 'drop-shadow(0 0 8px rgba(47,128,255,0.45))' }}
            />
            <span
              className="text-[17px] font-bold tracking-[-0.02em]"
              style={{ color: '#F5F8FF' }}
            >
              Adscheck
            </span>
          </a>

          {/* Center Nav — desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-[14px] font-medium rounded-lg transition-all duration-200 hover:text-white"
                style={{ color: '#A9BDDF' }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.background = 'rgba(47,128,255,0.10)';
                  (e.target as HTMLElement).style.color = '#F5F8FF';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.background = 'transparent';
                  (e.target as HTMLElement).style.color = '#A9BDDF';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right — language + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200"
                style={{
                  background: langOpen ? 'rgba(47,128,255,0.12)' : 'rgba(14,39,82,0.60)',
                  border: '1px solid rgba(104,165,255,0.20)',
                }}
              >
                <LanguageFlag code={locale} size={16} />
                <span className="text-[13px] font-medium hidden sm:block leading-none" style={{ color: '#F5F8FF' }}>
                  {currentLocale.label}
                </span>
                <svg
                  width="11" height="11" viewBox="0 0 12 12" fill="none"
                  className="transition-transform duration-200"
                  style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: '#7F96B8', flexShrink: 0 }}
                >
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown */}
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 rounded-[20px] z-50 lang-dropdown-enter"
                  style={{
                    background: 'rgba(4,18,44,0.95)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(104,165,255,0.32)',
                    boxShadow: [
                      '0 24px 60px rgba(3,17,38,0.72)',
                      '0 4px 16px rgba(3,17,38,0.50)',
                      '0 0 40px rgba(47,128,255,0.08)',
                      'inset 0 1px 0 rgba(104,165,255,0.12)',
                    ].join(', '),
                  }}
                >
                  {/* Inner padded rows wrapper — clips row backgrounds to inner radius */}
                  <div className="p-2">
                  <div className="overflow-hidden rounded-[12px]">
                  {locales.map(loc => {
                    const isSelected = loc.code === locale;
                    return (
                      <button
                        key={loc.code}
                        onClick={() => { onLocaleChange(loc.code); setLangOpen(false); }}
                        className="w-full flex items-center gap-3 px-4 py-3 transition-all duration-150 text-left relative"
                        style={{
                          background: isSelected
                            ? 'linear-gradient(90deg, rgba(47,128,255,0.22) 0%, rgba(47,128,255,0.10) 100%)'
                            : 'transparent',
                          borderLeft: isSelected ? '3px solid #2F80FF' : '3px solid transparent',
                          boxShadow: isSelected ? 'inset 0 0 0 1px rgba(104,165,255,0.18)' : 'none',
                        }}
                        onMouseEnter={e => {
                          if (!isSelected) {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(47,128,255,0.08)';
                          } else {
                            (e.currentTarget as HTMLElement).style.background =
                              'linear-gradient(90deg, rgba(47,128,255,0.28) 0%, rgba(47,128,255,0.14) 100%)';
                          }
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = isSelected
                            ? 'linear-gradient(90deg, rgba(47,128,255,0.22) 0%, rgba(47,128,255,0.10) 100%)'
                            : 'transparent';
                        }}
                      >
                        <LanguageFlag code={loc.code} size={18} />
                        <span
                          className="flex-1 text-[14px]"
                          style={{
                            color: isSelected ? '#F5F8FF' : '#A9BDDF',
                            fontWeight: isSelected ? 600 : 500,
                          }}
                        >
                          {loc.label}
                        </span>
                        {/* Fixed-width slot so rows don't shift */}
                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                          {isSelected && (
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center"
                              style={{
                                background: 'linear-gradient(135deg, #2F80FF 0%, #4D9CFF 100%)',
                                boxShadow: '0 0 8px rgba(47,128,255,0.50)',
                              }}
                            >
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M1.5 5L3.8 7.5L8.5 2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                  </div>{/* end inner overflow-hidden */}
                  </div>{/* end p-2 padding wrapper */}
                </div>
              )}
            </div>

            {/* CTA button */}
            <button
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-semibold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)',
                color: '#FFFFFF',
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
              {tr.cta_start}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: '#A9BDDF' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {mobileOpen ? (
                  <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M3 6H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 11H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden pb-4"
            style={{ borderTop: '1px solid rgba(104,165,255,0.12)' }}
          >
            <nav className="flex flex-col gap-1 pt-3">
              {navItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="w-full text-left px-4 py-2.5 text-[15px] font-medium rounded-xl transition-colors duration-150"
                  style={{ color: '#A9BDDF' }}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="mt-2 mx-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[15px] font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #7B2FF7 0%, #F916BD 100%)',
                  color: '#FFFFFF',
                }}
              >
                {tr.cta_start}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
