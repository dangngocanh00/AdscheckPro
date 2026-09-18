import { Locale, t } from '../i18n/translations';
import logoSrc from '../../assets/log-removebg.png';

interface Props {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function Footer({ locale, onLocaleChange }: Props) {
  const tr = t[locale];

  function scrollTo(href: string) {
    if (!href || href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  const links = [
    { label: tr.footer_intro, href: '#intro' },
    { label: tr.footer_features, href: '#features' },
    { label: tr.footer_workflow, href: '#workflow' },
    { label: tr.footer_control_hub, href: '#control-hub' },
    { label: tr.footer_faq, href: '#faq' },
    { label: tr.footer_policy, href: '#' },
    { label: tr.footer_support, href: '#' },
  ];

  return (
    <footer
      className="relative pt-12 pb-8 overflow-hidden"
      style={{
        background: '#031126',
        borderTop: '1px solid rgba(104,165,255,0.12)',
      }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5">
            <img
              src={logoSrc}
              alt="Adscheck"
              className="w-7 h-7 object-contain"
              style={{ filter: 'drop-shadow(0 0 6px rgba(47,128,255,0.40))' }}
            />
            <span className="text-[16px] font-bold tracking-[-0.02em]" style={{ color: '#F5F8FF' }}>
              Adscheck
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(link => (
              <button
                key={link.href + link.label}
                onClick={() => scrollTo(link.href)}
                className="text-[13px] font-medium transition-colors duration-150"
                style={{ color: '#7F96B8' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#A9BDDF'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#7F96B8'}
              >
                {link.label}
              </button>
            ))}
          </nav>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(104,165,255,0.08)' }}
        >
          <span className="text-[12px]" style={{ color: '#4A6580' }}>
            {tr.footer_copy}
          </span>
        </div>
      </div>
    </footer>
  );
}
