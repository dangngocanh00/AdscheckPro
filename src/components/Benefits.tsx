import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }

export function Benefits({ locale }: Props) {
  const tr = t[locale];

  const benefits = [
    { num: tr.benefit1_num, title: tr.benefit1_title, desc: tr.benefit1_desc },
    { num: tr.benefit2_num, title: tr.benefit2_title, desc: tr.benefit2_desc },
    { num: tr.benefit3_num, title: tr.benefit3_title, desc: tr.benefit3_desc },
    { num: tr.benefit4_num, title: tr.benefit4_title, desc: tr.benefit4_desc },
  ];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Diagonal lines background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(60deg, transparent, transparent 80px, rgba(47,128,255,0.03) 80px, rgba(47,128,255,0.03) 81px)',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
          {/* LEFT — heading */}
          <div className="lg:sticky lg:top-28">
            <h2
              className="text-[40px] md:text-[52px] font-bold tracking-[-0.03em] leading-[1.1]"
              style={{ color: '#F5F8FF' }}
            >
              {tr.benefits_heading}
            </h2>
            <div
              className="w-12 h-[3px] rounded-full mt-6"
              style={{ background: 'linear-gradient(90deg, #2F80FF, #72C7FF)' }}
            />
          </div>

          {/* RIGHT — benefits list */}
          <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(104,165,255,0.10)' }}>
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group py-8 flex gap-8 transition-all duration-200"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = '8px';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                }}
              >
                {/* Number */}
                <div
                  className="text-[56px] md:text-[72px] font-bold tracking-[-0.04em] leading-none flex-shrink-0 select-none"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(47,128,255,0.25)',
                    fontVariantNumeric: 'tabular-nums',
                    lineHeight: 1,
                    marginTop: '-4px',
                  }}
                >
                  {b.num}
                </div>
                <div className="pt-1">
                  <h3
                    className="text-[22px] font-bold tracking-[-0.02em] mb-2.5"
                    style={{ color: '#F5F8FF' }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: '#A9BDDF' }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
