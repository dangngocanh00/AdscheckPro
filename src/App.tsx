import { useState } from 'react';
import { Locale } from './i18n/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreDifferentiators } from './components/CoreDifferentiators';
import { AssetWorkspace } from './components/AssetWorkspace';
import { WorkflowSection } from './components/WorkflowSection';
import { ControlHub } from './components/ControlHub';
import { ModuleShowcase } from './components/ModuleShowcase';
import { Benefits } from './components/Benefits';
import { TargetUsers } from './components/TargetUsers';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import landingBg from '../background.png';

export default function App() {
  const [locale, setLocale] = useState<Locale>('vi');

  return (
    <>
      <Header locale={locale} onLocaleChange={setLocale} />

      {/* Landing root — single background image scrolls with full page */}
      <div style={{ position: 'relative', isolation: 'isolate', background: '#031126' }}>

        {/* BG — one long portrait artwork, covers full landing height */}
        <img
          src={landingBg}
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />

        {/* All landing content above background */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <main>
            <Hero locale={locale} />
            <CoreDifferentiators locale={locale} />
            <AssetWorkspace locale={locale} />
            <WorkflowSection locale={locale} />
            <ControlHub locale={locale} />
            <ModuleShowcase locale={locale} />
            <Benefits locale={locale} />
            <TargetUsers locale={locale} />
            <FAQ locale={locale} />
            <FinalCTA locale={locale} />
          </main>
        </div>
      </div>

      <Footer locale={locale} onLocaleChange={setLocale} />
    </>
  );
}
