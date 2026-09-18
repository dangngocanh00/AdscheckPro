import { Locale, t } from '../i18n/translations';
import { AgencyVisual, MediaBuyerVisual, ProfessionalAdvertiserVisual, TeamAdsVisual } from './TargetUserVisuals';

interface Props { locale: Locale }

const userIcons = [
  <svg viewBox="0 0 28 28" fill="none"><circle cx="14" cy="9" r="4"/><path d="M6 23v-2a6 6 0 016-6h4a6 6 0 016 6v2M21 7l2-2m-2 2h3"/></svg>,
  <svg viewBox="0 0 28 28" fill="none"><rect x="4" y="6" width="20" height="17" rx="3"/><path d="M4 11h20M9 16h5m-5 3h8"/></svg>,
  <svg viewBox="0 0 28 28" fill="none"><circle cx="9" cy="10" r="3"/><circle cx="19" cy="10" r="3"/><path d="M3 22v-1a5 5 0 015-5h12a5 5 0 015 5v1M13 8h2"/></svg>,
  <svg viewBox="0 0 28 28" fill="none"><path d="M14 3l3 6 6.5 1-4.7 4.6 1.1 6.5L14 18l-5.9 3.1 1.1-6.5L4.5 10 11 9zM14 22v3"/></svg>,
];
const visuals = [MediaBuyerVisual, AgencyVisual, TeamAdsVisual, ProfessionalAdvertiserVisual];

export function TargetUsers({ locale }: Props) {
  const tr = t[locale];
  const users = [
    { title: tr.user1_title, desc: tr.user1_desc },
    { title: tr.user2_title, desc: tr.user2_desc },
    { title: tr.user3_title, desc: tr.user3_desc },
    { title: tr.user4_title, desc: tr.user4_desc },
  ];
  return (
    <section className="target-users-section relative py-20 md:py-28">
      <div className="section-container">
        <h2 className="text-[36px] md:text-[48px] font-bold tracking-[-0.03em] leading-[1.1] mb-12 text-[#F5F8FF]">{tr.users_heading}</h2>
        <div className="target-users-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {users.map((user, index) => {
            const Visual = visuals[index];
            return <article className="target-user-card group" key={index}>
              <div className="target-user-copy">
                <div className="target-user-icon" aria-hidden="true">{userIcons[index]}</div>
                <h3 className="target-user-title">{user.title}</h3>
                <p className="target-user-description">{user.desc}</p>
              </div>
              <div className="target-user-art" aria-hidden="true"><Visual /></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
