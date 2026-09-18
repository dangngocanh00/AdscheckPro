import { useState } from 'react';
import { Locale, t } from '../i18n/translations';

interface Props { locale: Locale }
type VisualKind = 'sync' | 'select' | 'configure' | 'review' | 'track';

function WorkflowVisual({ kind }: { kind: VisualKind }) {
  return (
    <div className={'workflow-scene workflow-scene--' + kind} aria-hidden="true">
      <svg viewBox="0 0 640 320" role="presentation" focusable="false">
        <defs>
          <linearGradient id="workflow-scene-card" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#23589B" /><stop offset="1" stopColor="#0C2C5E" />
          </linearGradient>
          <linearGradient id="workflow-scene-line" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#398BFF" /><stop offset=".5" stopColor="#7CEBFF" /><stop offset="1" stopColor="#459BFF" />
          </linearGradient>
          <filter id="workflow-scene-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <circle cx="320" cy="164" r="130" fill="#207AD8" opacity=".12" filter="url(#workflow-scene-glow)" />

        {kind === 'sync' && <>
          {['VIA', 'AD', 'BM', 'PAGE', 'PIXEL'].map((asset, i) => {
            const x = 28 + i * 120;
            return <g key={asset}>
              <path className="workflow-scene-link" style={{ animationDelay: `${i * 85}ms` }} d={`M ${x + 50} 112 C ${x + 50} 162 320 137 320 194`} fill="none" stroke="url(#workflow-scene-line)" strokeWidth="2" opacity=".7" />
              <g className="workflow-scene-node" style={{ animationDelay: `${i * 75}ms` }}>
                <rect x={x} y="49" width="100" height="64" rx="16" fill="url(#workflow-scene-card)" stroke="#65BBF3" strokeOpacity=".66" />
                <circle cx={x + 22} cy="81" r="7" fill="#67D8FF" />
                <text x={x + 39} y="86" fill="#E9F8FF" fontSize="15" fontWeight="700">{asset}</text>
              </g>
            </g>;
          })}
          <circle cx="320" cy="194" r="7" fill="#8FF5FF" filter="url(#workflow-scene-glow)" />
          <rect className="workflow-scene-hub" x="178" y="192" width="284" height="83" rx="22" fill="url(#workflow-scene-card)" stroke="#81DFFF" strokeWidth="2" />
          <circle cx="222" cy="233" r="20" fill="#287FC6" stroke="#82DFFF" />
          <path d="M213 233h18m-9-9v18" stroke="#E8FFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="257" y="240" fill="#E2FCFF" fontSize="18" fontWeight="700">CONNECTED</text>
        </>}

        {kind === 'select' && <>
          <rect x="52" y="42" width="130" height="31" rx="15" fill="#164779" stroke="#69B7E7" />
          <circle cx="74" cy="57" r="7" fill="none" stroke="#B0E8FF" strokeWidth="2" />
          <path d="m79 62 6 6" stroke="#B0E8FF" strokeWidth="2" strokeLinecap="round" />
          <text x="96" y="62" fill="#CAEFFF" fontSize="12" fontWeight="700">FILTER</text>
          <circle cx="318" cy="164" r="117" fill="none" stroke="#4B9BDF" strokeWidth="1" strokeDasharray="5 8" opacity=".5" />
          <circle cx="318" cy="164" r="77" fill="none" stroke="#77DFFF" strokeWidth="2" opacity=".65" />
          <path d="M318 38v37m0 178v28M189 164h40m178 0h40" stroke="#7AE6FF" strokeWidth="2" opacity=".6" />
          {[
            { x: 55, y: 91, label: 'VIA', checked: true },
            { x: 238, y: 115, label: 'AD', checked: true },
            { x: 457, y: 91, label: 'BM', checked: false },
          ].map(item => <g key={item.label}>
            <rect x={item.x} y={item.y} width="128" height="103" rx="18" fill="url(#workflow-scene-card)" stroke={item.checked ? '#81E7FF' : '#4D82B8'} strokeWidth={item.checked ? 2 : 1} />
            <circle cx={item.x + 35} cy={item.y + 36} r="15" fill={item.checked ? '#2D9ACB' : '#28527F'} />
            <text className={item.checked ? 'workflow-scene-check' : ''} x={item.x + 35} y={item.y + 42} textAnchor="middle" fill="#ECFCFF" fontSize="16">{item.checked ? '✓' : '○'}</text>
            <text x={item.x + 22} y={item.y + 75} fill="#F1FAFF" fontSize="16" fontWeight="700">{item.label}</text>
          </g>)}
          <rect x="247" y="246" width="146" height="35" rx="17" fill="#17649D" stroke="#75DDFF" />
          <text x="320" y="269" textAnchor="middle" fill="#DEFAFF" fontSize="13" fontWeight="700">2 SELECTED</text>
        </>}

        {kind === 'configure' && <>
          <path d="M80 169H560" stroke="#2C79BF" strokeWidth="13" strokeLinecap="round" opacity=".24" />
          <path className="workflow-scene-flow" d="M80 169H560" stroke="url(#workflow-scene-line)" strokeWidth="3" strokeLinecap="round" />
          {[
            { x: 38, title: 'TRIGGER', symbol: '◇' },
            { x: 245, title: 'RULE', symbol: '≡' },
            { x: 452, title: 'ACTION', symbol: '↗' },
          ].map((node, i) => <g key={node.title}>
            <rect className={i === 2 ? 'workflow-scene-action' : ''} x={node.x} y="83" width="150" height="170" rx="21" fill="url(#workflow-scene-card)" stroke={i === 1 ? '#83E5FF' : '#66B7ED'} strokeWidth="2" />
            <circle cx={node.x + 75} cy="136" r="27" fill="#246EAB" stroke="#76D8FF" />
            <text x={node.x + 75} y="145" textAnchor="middle" fill="#E7FBFF" fontSize="30">{node.symbol}</text>
            <text x={node.x + 75} y="206" textAnchor="middle" fill="#F3FBFF" fontSize="17" fontWeight="700">{node.title}</text>
            <circle cx={node.x + 75} cy="231" r="4" fill="#70E9C7" />
          </g>)}
          <path d="m218 163 8 6-8 6m207-12 8 6-8 6" fill="none" stroke="#B5F5FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="250" y="268" width="140" height="31" rx="15" fill="#17588B" stroke="#73CDEC" />
          <text x="320" y="289" textAnchor="middle" fill="#D9F8FF" fontSize="12" fontWeight="700">CONFIGURED</text>
        </>}

        {kind === 'review' && <>
          <circle cx="177" cy="161" r="102" fill="#2777BE" opacity=".18" filter="url(#workflow-scene-glow)" />
          <path d="M177 63 251 91v70c0 58-36 95-74 115-38-20-74-57-74-115V91z" fill="url(#workflow-scene-card)" stroke="#87E7FF" strokeWidth="3" />
          <path d="m142 160 25 25 48-54" fill="none" stroke="#83F4D3" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          {['Assets', 'Targets', 'Actions', 'Rules'].map((item, i) => <g key={item}>
            <rect x="318" y={46 + i * 63} width="250" height="50" rx="14" fill="url(#workflow-scene-card)" stroke="#5EA8DA" strokeOpacity=".75" />
            <circle cx="347" cy={71 + i * 63} r="11" fill="#267B85" />
            <text className="workflow-scene-review-check" style={{ animationDelay: `${i * 90}ms` }} x="347" y={76 + i * 63} textAnchor="middle" fill="#B8FFE8" fontSize="13">✓</text>
            <text x="373" y={76 + i * 63} fill="#EAF8FF" fontSize="15" fontWeight="600">{item.toUpperCase()}</text>
            <text x="546" y={76 + i * 63} textAnchor="end" fill="#83ECCF" fontSize="11" fontWeight="700">PASS</text>
          </g>)}
          <g className="workflow-scene-ready"><rect x="111" y="274" width="132" height="31" rx="15" fill="#176F87" stroke="#7CEBD0" /><text x="177" y="295" textAnchor="middle" fill="#D5FFF1" fontSize="12" fontWeight="700">READY</text></g>
        </>}

        {kind === 'track' && <>
          <rect x="34" y="47" width="370" height="231" rx="22" fill="url(#workflow-scene-card)" stroke="#5CB1E8" strokeWidth="2" />
          {[110, 162, 214].map(y => <path key={y} d={`M57 ${y}h323`} stroke="#77B1DD" opacity=".2" />)}
          <path className="workflow-scene-chart-glow" d="M57 236 C 95 226 108 211 138 215 S 179 179 216 185 S 258 148 292 154 S 338 111 378 93" fill="none" stroke="#74DEFF" strokeWidth="12" opacity=".35" filter="url(#workflow-scene-glow)" />
          <path className="workflow-scene-chart-line" d="M57 236 C 95 226 108 211 138 215 S 179 179 216 185 S 258 148 292 154 S 338 111 378 93" fill="none" stroke="#74DEFF" strokeWidth="4" strokeLinecap="round" pathLength="1" />
          <circle cx="378" cy="93" r="7" fill="#A5F4FF" />
          {[
            { y: 50, label: 'PROCESSED', value: '1,284' },
            { y: 123, label: 'SUCCESS', value: '98.6%' },
            { y: 196, label: 'ACTIVE', value: '24' },
          ].map((stat, i) => <g className="workflow-scene-stat" style={{ animationDelay: `${i * 80}ms` }} key={stat.label}>
            <rect x="429" y={stat.y} width="176" height="62" rx="16" fill="url(#workflow-scene-card)" stroke="#70C6F2" />
            <text x="448" y={stat.y + 23} fill="#A8D5F1" fontSize="10" fontWeight="700">{stat.label}</text>
            <text x="448" y={stat.y + 48} fill={i === 1 ? '#B8FFE5' : '#F3FCFF'} fontSize="22" fontWeight="700">{stat.value}</text>
          </g>)}
          <rect x="66" y="63" width="119" height="32" rx="16" fill="#176C9A" stroke="#78E6F1" />
          <circle className="workflow-scene-live" cx="85" cy="79" r="5" fill="#6FF1C9" /><text x="100" y="84" fill="#ECFCFF" fontSize="12" fontWeight="700">REALTIME</text>
        </>}
      </svg>
    </div>
  );
}

export function WorkflowSection({ locale }: Props) {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const tr = t[locale];

  const workflowSteps: { num: string; title: string; desc: string; tags: string[]; kind: VisualKind }[] = [
    { num: '01', title: tr.workflow_step1_title, desc: tr.workflow_step1_desc, tags: ['Assets', 'Sync', 'Workspace'], kind: 'sync' },
    { num: '02', title: tr.workflow_step2_title, desc: tr.workflow_step2_desc, tags: ['Selection', 'Filtering', 'Targeting'], kind: 'select' },
    { num: '03', title: tr.workflow_step3_title, desc: tr.workflow_step3_desc, tags: ['Actions', 'Config', 'Rules'], kind: 'configure' },
    { num: '04', title: tr.workflow_step4_title, desc: tr.workflow_step4_desc, tags: ['Review', 'Validation', 'Safety'], kind: 'review' },
    { num: '05', title: tr.workflow_step5_title, desc: tr.workflow_step5_desc, tags: ['Tracking', 'Results', 'Realtime'], kind: 'track' },
  ];
  const active = workflowSteps[activeWorkflowStep];

  return (
    <section id="workflow" className="workflow-section relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="section-container relative z-10">
        <div className="mb-12 max-w-[760px] md:mb-16">
          <div className="workflow-eyebrow mb-5 flex items-center gap-3">
            <span className="workflow-eyebrow-line" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase sm:text-xs">{tr.workflow_eyebrow}</span>
          </div>
          <h2 className="workflow-heading text-[34px] font-bold leading-[1.12] tracking-[-0.03em] sm:text-[40px] md:text-[52px]">
            {tr.workflow_heading_1}<br />
            <span>{tr.workflow_heading_2}</span>
          </h2>
          <p className="workflow-intro mt-5 max-w-[650px] text-[15px] leading-[1.7] sm:text-[16px]">{tr.workflow_intro}</p>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[350px_minmax(0,1fr)] lg:items-stretch lg:gap-9">
          <div className="flex flex-col gap-3 lg:justify-center" aria-label={tr.workflow_eyebrow}>
            {workflowSteps.map((step, i) => (
              <button
                key={step.num}
                type="button"
                aria-pressed={i === activeWorkflowStep}
                onClick={() => setActiveWorkflowStep(i)}
                className={`workflow-step-card flex flex-col rounded-[22px] px-5 py-4 text-left ${i === activeWorkflowStep ? 'is-active' : ''}`}
              >
                <span className="flex items-center gap-4">
                  <span className="workflow-step-num font-mono text-[12px] font-bold tracking-[0.13em]">{step.num}</span>
                  <span className="workflow-step-title text-[16px] font-semibold leading-snug">{step.title}</span>
                </span>
                {i === activeWorkflowStep && <span className="workflow-step-desc ml-9 mt-2 text-[13px] leading-[1.55]">{step.desc}</span>}
              </button>
            ))}
          </div>

          <div className="workflow-showcase min-w-0 rounded-[28px] p-4 sm:p-6">
            <div key={active.num} className="workflow-stage-content">
              <div className="workflow-stage-head">
                <span className="workflow-stage-label text-[11px] font-bold tracking-[0.17em] uppercase">{tr.workflow_step_label} {active.num}</span>
                <h3 className="mt-2 text-[22px] font-bold leading-tight sm:text-[25px]">{active.title}</h3>
                <p className="mt-2 max-w-[620px] text-[14px] leading-[1.6] sm:text-[15px]">{active.desc}</p>
                <div className="workflow-tags mt-4 flex flex-wrap gap-2">{active.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <WorkflowVisual kind={active.kind} />
            </div>
            <div className="workflow-pager mt-5 flex items-center justify-center gap-2.5" aria-label={tr.workflow_eyebrow}>
              {workflowSteps.map((step, i) => (
                <button
                  key={step.num}
                  type="button"
                  aria-label={`${tr.workflow_step_label} ${step.num}: ${step.title}`}
                  aria-current={i === activeWorkflowStep ? 'step' : undefined}
                  onClick={() => setActiveWorkflowStep(i)}
                  className={`workflow-pager-button ${i === activeWorkflowStep ? 'is-active' : ''}`}
                ><span /></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
