import { Locale } from '../i18n/translations';

interface FlagProps {
  size?: number; // height in px; width = size * (20/14)
}

function VietnamFlag({ size = 16 }: FlagProps) {
  const w = Math.round(size * 20 / 14);
  return (
    <svg width={w} height={size} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="20" height="14" fill="#DA251D" />
      {/* 5-pointed star centered */}
      <polygon
        points="10,3.2 10.9,5.9 13.8,5.9 11.5,7.5 12.3,10.2 10,8.6 7.7,10.2 8.5,7.5 6.2,5.9 9.1,5.9"
        fill="#FFFF00"
      />
    </svg>
  );
}

function EnglandFlag({ size = 16 }: FlagProps) {
  const w = Math.round(size * 20 / 14);
  return (
    <svg width={w} height={size} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="20" height="14" fill="white" />
      {/* St George's Cross — vertical bar */}
      <rect x="8.5" y="0" width="3" height="14" fill="#CE1124" />
      {/* St George's Cross — horizontal bar */}
      <rect x="0" y="5.5" width="20" height="3" fill="#CE1124" />
    </svg>
  );
}

function RussiaFlag({ size = 16 }: FlagProps) {
  const w = Math.round(size * 20 / 14);
  return (
    <svg width={w} height={size} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      {/* White top third */}
      <rect width="20" height="4.67" fill="#FFFFFF" />
      {/* Blue middle third */}
      <rect y="4.67" width="20" height="4.67" fill="#0039A6" />
      {/* Red bottom third */}
      <rect y="9.33" width="20" height="4.67" fill="#D52B1E" />
    </svg>
  );
}

function ThailandFlag({ size = 16 }: FlagProps) {
  const w = Math.round(size * 20 / 14);
  return (
    <svg width={w} height={size} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      {/* Red top */}
      <rect width="20" height="2.33" fill="#A51931" />
      {/* White */}
      <rect y="2.33" width="20" height="2.33" fill="#FFFFFF" />
      {/* Blue center (double height) */}
      <rect y="4.67" width="20" height="4.67" fill="#2D2A4A" />
      {/* White */}
      <rect y="9.33" width="20" height="2.33" fill="#FFFFFF" />
      {/* Red bottom */}
      <rect y="11.67" width="20" height="2.33" fill="#A51931" />
    </svg>
  );
}

function ChinaFlag({ size = 16 }: FlagProps) {
  const w = Math.round(size * 20 / 14);
  return (
    <svg width={w} height={size} viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, display: 'block', flexShrink: 0 }}>
      <rect width="20" height="14" fill="#DE2910" />
      {/* Large star */}
      <polygon
        points="4,1.8 4.7,3.9 6.9,3.9 5.2,5.1 5.8,7.2 4,6 2.2,7.2 2.8,5.1 1.1,3.9 3.3,3.9"
        fill="#FFDE00"
      />
      {/* 4 small stars */}
      <polygon points="8.5,0.8 8.8,1.7 9.7,1.7 9,2.2 9.3,3.1 8.5,2.6 7.7,3.1 8,2.2 7.3,1.7 8.2,1.7" fill="#FFDE00" />
      <polygon points="10,2.8 10.3,3.7 11.2,3.7 10.5,4.2 10.8,5.1 10,4.6 9.2,5.1 9.5,4.2 8.8,3.7 9.7,3.7" fill="#FFDE00" />
      <polygon points="10,5.5 10.3,6.4 11.2,6.4 10.5,6.9 10.8,7.8 10,7.3 9.2,7.8 9.5,6.9 8.8,6.4 9.7,6.4" fill="#FFDE00" />
      <polygon points="8.5,7.5 8.8,8.4 9.7,8.4 9,8.9 9.3,9.8 8.5,9.3 7.7,9.8 8,8.9 7.3,8.4 8.2,8.4" fill="#FFDE00" />
    </svg>
  );
}

export function LanguageFlag({ code, size = 16 }: { code: Locale; size?: number }) {
  switch (code) {
    case 'vi': return <VietnamFlag size={size} />;
    case 'en': return <EnglandFlag size={size} />;
    case 'ru': return <RussiaFlag size={size} />;
    case 'th': return <ThailandFlag size={size} />;
    case 'zh': return <ChinaFlag size={size} />;
  }
}
