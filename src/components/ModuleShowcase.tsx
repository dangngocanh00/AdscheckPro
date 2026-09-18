import { Locale, t } from '../i18n/translations';
import adsCheckImage from '../../assets/adscheckpro-card.png';
import adsSaveImage from '../../assets/adssave-card.png';
import extendedPaymentImage from '../../assets/extendedpayment-card.png';
import controlHubImage from '../../assets/controlhub-card.png';

interface Props { locale: Locale }

const icons = [
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="m8 12 3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16v13H4zM4 7l3-4h13M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-4 5v5m-2.5-2.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="4" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="18" y="8" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" /><path d="M6 19h8M10 15v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>,
];

export function ModuleShowcase({ locale }: Props) {
  const tr = t[locale];
  const modules = [
    { title: tr.module1_title, desc: tr.module1_desc, image: adsCheckImage },
    { title: tr.module2_title, desc: tr.module2_desc, image: adsSaveImage },
    { title: tr.module3_title, desc: tr.module3_desc, image: extendedPaymentImage },
    { title: tr.module4_title, desc: tr.module4_desc, image: controlHubImage },
  ];

  return (
    <section className="module-showcase relative py-20 md:py-28 lg:py-32">
      <div className="section-container relative z-10">
        <div className="module-showcase-intro mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <div className="module-showcase-eyebrow mb-5 flex items-center justify-center gap-3">
            <span className="module-showcase-line" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase sm:text-xs">{tr.modules_eyebrow}</span>
            <span className="module-showcase-line" aria-hidden="true" />
          </div>
          <h2 className="module-showcase-heading mb-5 text-[34px] font-extrabold leading-[1.13] tracking-[-0.035em] sm:text-[42px] md:text-[52px]">
            {tr.modules_heading}
          </h2>
          <p className="module-showcase-subtitle mx-auto max-w-[650px] text-[15px] leading-[1.75] sm:text-[17px]">
            {tr.modules_desc}
          </p>
        </div>
        <div className="module-showcase-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {modules.map((mod, i) => (
            <article key={mod.title} tabIndex={0} className="module-card flex min-w-0 flex-col gap-5 rounded-[28px] p-5 sm:p-6">
              <div className="module-card-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px]">{icons[i]}</div>
              <div className="module-card-copy">
                <h3 className="mb-2 text-[17px] font-bold leading-tight tracking-[-0.015em]">{mod.title}</h3>
                <p className="text-[14px] leading-[1.65]">{mod.desc}</p>
              </div>
              <div className="module-preview" aria-hidden="true">
                <img src={mod.image} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
