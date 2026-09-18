import type { ReactNode } from 'react';

function Scene({ id, children }: { id: string; children: ReactNode }) {
  return <svg className="target-user-scene" viewBox="0 0 260 190" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <defs>
      <linearGradient id={id + '-glass'} x1="25" y1="30" x2="220" y2="165" gradientUnits="userSpaceOnUse">
        <stop stopColor="#245A9A" stopOpacity=".94"/><stop offset=".52" stopColor="#123970" stopOpacity=".92"/><stop offset="1" stopColor="#071D48" stopOpacity=".98"/>
      </linearGradient>
      <linearGradient id={id + '-edge'} x1="40" y1="40" x2="215" y2="155" gradientUnits="userSpaceOnUse">
        <stop stopColor="#B1F0FF"/><stop offset=".5" stopColor="#59B8FA"/><stop offset="1" stopColor="#337BDE"/>
      </linearGradient>
      <radialGradient id={id + '-halo'}><stop stopColor="#5ACBFF" stopOpacity=".5"/><stop offset="1" stopColor="#5ACBFF" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="130" cy="164" rx="114" ry="23" fill={'url(#' + id + '-halo)'}/>
    <path d="M32 158l98-24 98 24-98 25-98-25Z" fill="#0D336A" fillOpacity=".64" stroke="#5CBFFF" strokeOpacity=".36"/>
    <path d="M48 159l82-19 82 19-82 19-82-19Z" stroke="#74D7FF" strokeOpacity=".31"/>
    {children}
  </svg>;
}

function Profile({ x, y }: { x: number; y: number }) {
  return <g transform={'translate(' + x + ' ' + y + ')'}>
    <rect width="53" height="51" rx="8" fill="url(#agency-glass)" stroke="url(#agency-edge)" strokeOpacity=".8"/>
    <circle cx="16" cy="19" r="6" fill="#82DFFF" fillOpacity=".75"/>
    <path d="M6 34c1-7 19-7 20 0" stroke="#8AE4FF" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 17h14m-14 6h10m-10 10h13" stroke="#94D9FB" strokeOpacity=".72" strokeWidth="2" strokeLinecap="round"/>
  </g>;
}

export function MediaBuyerVisual() {
  return <Scene id="buyer">
    <rect x="48" y="34" width="163" height="111" rx="9" fill="url(#buyer-glass)" stroke="url(#buyer-edge)" strokeWidth="1.5"/>
    <rect x="55" y="41" width="149" height="95" rx="4" fill="#071E47" stroke="#79CBFC" strokeOpacity=".32"/>
    <path d="M55 57h149M78 57v79" stroke="#69B9EF" strokeOpacity=".34"/>
    <circle cx="65" cy="49" r="2" fill="#9BEFFF"/><circle cx="73" cy="49" r="2" fill="#68BDFC"/>
    <path d="M63 72h7m-7 12h7m-7 12h7m-7 12h7" stroke="#8BDFFF" strokeWidth="2" strokeLinecap="round"/>
    {[72,91,110].map((y) => <g key={y}><rect x="87" y={y} width="60" height="13" rx="3" fill="#1D5086" fillOpacity=".75"/><circle cx="95" cy={y+6.5} r="3" fill="#74D9FB"/><path d={'M103 ' + (y+6) + 'h32'} stroke="#90CEEE" strokeOpacity=".7" strokeWidth="2"/></g>)}
    <rect x="154" y="70" width="42" height="50" rx="4" fill="#164477" stroke="#79D4F8" strokeOpacity=".5"/>
    <path d="M161 110l8-11 7 4 7-16 7 5" stroke="#8EF0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M39 145h181l13 13H26l13-13Z" fill="#174E86" stroke="#85D5FF" strokeOpacity=".78"/>
    <path d="M85 149h89m-65 5h43" stroke="#9BE9FF" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round"/>
    <g transform="translate(12 64)"><rect width="39" height="39" rx="7" fill="url(#buyer-glass)" stroke="#8BDEFF" strokeOpacity=".8"/><path d="M10 24h19m-15-7h11M20 11v19" stroke="#A0EAFF" strokeWidth="2"/></g>
    <g transform="translate(8 109)"><rect width="37" height="34" rx="7" fill="url(#buyer-glass)" stroke="#8BDEFF" strokeOpacity=".7"/><circle cx="18" cy="17" r="8" stroke="#9FEAFF" strokeWidth="2"/><circle cx="18" cy="17" r="2" fill="#9FEAFF"/></g>
    <g transform="translate(214 103)"><circle cx="15" cy="15" r="16" fill="url(#buyer-glass)" stroke="#91E5FF"/><circle cx="15" cy="15" r="9" stroke="#91E5FF" strokeOpacity=".8"/><circle cx="15" cy="15" r="3" fill="#A9F0FF"/><path d="M15-4v9m0 20v9M-4 15h9m20 0h9" stroke="#A9F0FF"/></g>
  </Scene>;
}

export function AgencyVisual() {
  return <Scene id="agency">
    <path d="M126 59 51 78m84-19 74 20M125 120 46 124m103-5 69 5" stroke="#6ECDF7" strokeOpacity=".56" strokeWidth="1.5" strokeDasharray="3 4"/>
    <Profile x={14} y={42}/><Profile x={194} y={39}/><Profile x={5} y={109}/><Profile x={202} y={109}/>
    <path d="M66 63h44l11 10h69v62H66V63Z" fill="#0A2C5E" stroke="#72BFFA" strokeOpacity=".7"/>
    <path d="M74 56h48l10 11h58v63H74V56Z" fill="#164B83" stroke="#78D4FC" strokeOpacity=".8"/>
    <path d="M65 82h60l12 9h58l-12 53H78L65 82Z" fill="url(#agency-glass)" stroke="url(#agency-edge)" strokeWidth="1.5"/>
    <path d="M82 105h60m-60 11h82m-82 11h67" stroke="#9BDEFF" strokeOpacity=".65" strokeWidth="3" strokeLinecap="round"/>
    <rect x="153" y="102" width="27" height="27" rx="6" fill="#337CB3" stroke="#A5EAFF"/><circle cx="166.5" cy="112" r="4" fill="#C0F6FF"/><path d="M159 122c1-7 14-7 15 0" stroke="#C0F6FF" strokeWidth="2"/>
    <circle cx="130" cy="70" r="3" fill="#BAF3FF"/><circle cx="191" cy="115" r="3" fill="#BAF3FF"/>
  </Scene>;
}

export function TeamAdsVisual() {
  return <Scene id="team">
    <path d="M54 74 85 94m122-24-31 24M56 139l33-19m114 17-32-18" stroke="#83D9FF" strokeOpacity=".72" strokeWidth="1.6" strokeDasharray="4 4"/>
    <rect x="81" y="40" width="98" height="112" rx="10" fill="url(#team-glass)" stroke="url(#team-edge)" strokeWidth="1.5"/>
    <rect x="90" y="49" width="80" height="94" rx="5" fill="#0A2858" stroke="#8EDCFF" strokeOpacity=".36"/>
    <path d="M100 64h43m-43 7h58" stroke="#A1E8FF" strokeWidth="3" strokeLinecap="round" strokeOpacity=".78"/>
    {[90,109,128].map((y,i) => <g key={y}><rect x="100" y={y-7} width="12" height="12" rx="3" fill="#265F96" stroke="#A6ECFF"/><path d={'m103 ' + (y-1) + ' 3 3 5-6'} stroke="#C3F8FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d={'M121 ' + (y-1) + 'h' + (i===1?29:37)} stroke="#94D9FA" strokeOpacity=".74" strokeWidth="3" strokeLinecap="round"/></g>)}
    {[{x:17,y:41},{x:192,y:39},{x:14,y:118},{x:194,y:116}].map(({x,y},i) => <g key={i} transform={'translate(' + x + ' ' + y + ')'}><rect width="51" height="43" rx="9" fill="url(#team-glass)" stroke="#8BDFFF" strokeOpacity=".82"/><circle cx="25.5" cy="15" r="6" fill="#9BEAFF"/><path d="M14 32c1-10 22-10 23 0" stroke="#9BEAFF" strokeWidth="2" strokeLinecap="round"/></g>)}
  </Scene>;
}

export function ProfessionalAdvertiserVisual() {
  return <Scene id="pro">
    <rect x="40" y="42" width="178" height="108" rx="10" fill="url(#pro-glass)" stroke="url(#pro-edge)" strokeWidth="1.5"/>
    <rect x="49" y="51" width="160" height="90" rx="5" fill="#092450" stroke="#84CFFF" strokeOpacity=".34"/>
    <path d="M49 68h160M154 68v73" stroke="#83CFFC" strokeOpacity=".3"/>
    <circle cx="58" cy="59" r="2" fill="#BAF3FF"/><circle cx="66" cy="59" r="2" fill="#71CBFC"/>
    <path d="M62 126V99m15 27V87m15 39v-18m15 18V77m15 49V92m15 34V72" stroke="#5FA8F5" strokeWidth="7" strokeOpacity=".66"/>
    <path d="M61 112l18-16 17 7 20-23 21-12" stroke="#9FF4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m128 68 9 0-2 9" stroke="#9FF4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="181" cy="101" r="19" stroke="#80DDFD" strokeWidth="2"/><circle cx="181" cy="101" r="10" stroke="#80DDFD" strokeWidth="2"/><circle cx="181" cy="101" r="3" fill="#BEFAFF"/>
    <path d="M181 75v9m0 34v9m-26-26h9m34 0h9" stroke="#9CEBFF" strokeWidth="1.5"/>
    <g transform="translate(16 21)"><rect width="40" height="39" rx="8" fill="url(#pro-glass)" stroke="#A5EBFF"/><path d="m20 7 3.5 8 8.5 1-6.4 6 1.5 9L20 27l-7.1 4 1.5-9-6.4-6 8.5-1L20 7Z" fill="#66C7FB" stroke="#C0F7FF"/></g>
    <g transform="translate(210 26)"><rect width="34" height="37" rx="8" fill="url(#pro-glass)" stroke="#A5EBFF"/><path d="m8 26 8-9 5 4 6-11m0 0h-7m7 0v7" stroke="#ACF2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>
  </Scene>;
}
