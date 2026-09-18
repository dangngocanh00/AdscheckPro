import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }

const userIcons = [
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M7 22v-2a5 5 0 015-5h4a5 5 0 015 5v2" stroke="#4D9CFF" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="14" cy="10" r="4" stroke="#4D9CFF" strokeWidth="1.6" />
    <path d="M20 8l2-2M20 8h2" stroke="#72C7FF" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="6" width="20" height="16" rx="2" stroke="#4D9CFF" strokeWidth="1.6" />
    <path d="M4 11h20" stroke="#4D9CFF" strokeWidth="1.4" />
    <path d="M9 16h3M9 19h5" stroke="#72C7FF" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="20" cy="17.5" r="3" stroke="#72C7FF" strokeWidth="1.3" />
    <path d="M20 16.5v1l0.7 0.7" stroke="#72C7FF" strokeWidth="1.1" strokeLinecap="round" />
  </svg>,
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="9" cy="10" r="3.5" stroke="#4D9CFF" strokeWidth="1.5" />
    <circle cx="19" cy="10" r="3.5" stroke="#4D9CFF" strokeWidth="1.5" />
    <path d="M4 22v-1a5 5 0 015-5h10a5 5 0 015 5v1" stroke="#4D9CFF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 8h2" stroke="#72C7FF" strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 4l2.5 5.5 5.5.8-4 3.9.95 5.45L14 17l-4.95 2.65.95-5.45-4-3.9 5.5-.8L14 4z" stroke="#4D9CFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 24v-7" stroke="#72C7FF" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
  </svg>,
];

export function TargetUsers({ locale }: Props) {
  const tr = t[locale];

  const users = [
    { icon: userIcons[0], title: tr.user1_title, desc: tr.user1_desc },
    { icon: userIcons[1], title: tr.user2_title, desc: tr.user2_desc },
    { icon: userIcons[2], title: tr.user3_title, desc: tr.user3_desc },
    { icon: userIcons[3], title: tr.user4_title, desc: tr.user4_desc },
  ];

  return (
    <section
      className="relative py-20 md:py-28"
      style={{ background: 'transparent' }}
    >
      <div className="section-container">
        <h2
          className="text-[36px] md:text-[48px] font-bold tracking-[-0.03em] leading-[1.1] mb-12"
          style={{ color: '#F5F8FF' }}
        >
          {tr.users_heading}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {users.map((u, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 transition-all duration-250 cursor-default"
              style={{
                background: 'rgba(14,39,82,0.35)',
                border: '1px solid rgba(104,165,255,0.12)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(14,39,82,0.60)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(104,165,255,0.28)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(14,39,82,0.35)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(104,165,255,0.12)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(47,128,255,0.10)',
                  border: '1px solid rgba(104,165,255,0.18)',
                }}
              >
                {u.icon}
              </div>
              <h3 className="text-[17px] font-bold mb-2" style={{ color: '#F5F8FF' }}>
                {u.title}
              </h3>
              <p className="text-[14px] leading-[1.6]" style={{ color: '#A9BDDF' }}>
                {u.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
