import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { tranSmartPlatforms } from '../data/socianteContent';

type PlatformKey = 'banking' | 'mobility';

// Mock UI visualization for Digital Banking
const BankingUI = () => (
  <div className="w-full h-full bg-navy/95 rounded-sm p-6 overflow-hidden select-none">
    {/* Header bar */}
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-xs text-white/40 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>TranSmart</div>
        <div className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Digital Banking Platform</div>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-teal opacity-80" />
        <div className="w-2 h-2 rounded-full bg-royal opacity-60" />
        <div className="w-2 h-2 rounded-full bg-cyan opacity-40" />
      </div>
    </div>

    {/* Stat cards */}
    <div className="grid grid-cols-3 gap-3 mb-5">
      {[
        { label: 'Transactions', color: '#00A6A6' },
        { label: 'Settlements', color: '#1765E0' },
        { label: 'Disputes', color: '#18C8EC' },
      ].map((item) => (
        <div key={item.label} className="rounded-sm p-3 border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="w-full h-8 mb-2 rounded-sm overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div
              className="h-full rounded-sm opacity-60"
              style={{
                width: `${55 + Math.random() * 30}%`,
                background: `linear-gradient(90deg, ${item.color}, transparent)`,
              }}
            />
          </div>
          <div className="text-xs text-white/40" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</div>
        </div>
      ))}
    </div>

    {/* Chart area */}
    <div className="rounded-sm p-4 mb-4 border border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Wallet Activity</span>
        <div className="flex gap-2">
          {['1D','1W','1M'].map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-sm text-white/40" style={{ fontFamily: 'JetBrains Mono, monospace', background: t === '1W' ? 'rgba(0,166,166,0.2)' : 'transparent', color: t === '1W' ? '#00A6A6' : undefined }}>
              {t}
            </span>
          ))}
        </div>
      </div>
      {/* Mini SVG chart */}
      <svg viewBox="0 0 240 60" className="w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00A6A6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00A6A6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,45 C30,42 50,30 80,28 C110,26 130,35 160,20 C185,10 210,15 240,12" stroke="#00A6A6" strokeWidth="1.5" fill="none" />
        <path d="M0,45 C30,42 50,30 80,28 C110,26 130,35 160,20 C185,10 210,15 240,12 L240,60 L0,60Z" fill="url(#chartFill)" />
        {/* Data points */}
        <circle cx="80" cy="28" r="2.5" fill="#00A6A6" />
        <circle cx="160" cy="20" r="2.5" fill="#18C8EC" />
      </svg>
    </div>

    {/* Transaction list */}
    <div className="space-y-2">
      {['Prepaid Wallet Top-up', 'Corporate Collection', 'Multi-system Settlement'].map((item, i) => (
        <div key={item} className="flex items-center justify-between py-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: ['#00A6A6','#1765E0','#18C8EC'][i] }} />
            <span className="text-xs text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
          </div>
          <span className="text-xs text-white/30" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Processing</span>
        </div>
      ))}
    </div>
  </div>
);

// Mock UI visualization for Mobility
const MobilityUI = () => (
  <div className="w-full h-full bg-navy/95 rounded-sm p-6 overflow-hidden select-none">
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-xs text-white/40 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>TranSmart</div>
        <div className="text-sm font-bold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>Unified Mobility Platform</div>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-teal opacity-80" />
        <div className="w-2 h-2 rounded-full bg-royal opacity-60" />
      </div>
    </div>

    {/* Map-like area */}
    <div className="relative rounded-sm mb-4 overflow-hidden" style={{ height: '130px', background: 'rgba(8,43,76,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <svg viewBox="0 0 280 130" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* Road lines */}
        <line x1="0" y1="65" x2="280" y2="65" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
        <line x1="0" y1="65" x2="280" y2="65" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="10 8" />
        <path d="M100,0 C120,40 140,80 160,130" stroke="rgba(255,255,255,0.06)" strokeWidth="10" fill="none" />
        {/* Vehicle nodes */}
        <circle cx="60" cy="65" r="5" fill="#00A6A6" opacity="0.9" />
        <circle cx="60" cy="65" r="12" fill="none" stroke="#00A6A6" strokeWidth="0.8" opacity="0.4" />
        <circle cx="180" cy="65" r="5" fill="#1765E0" opacity="0.9" />
        <circle cx="120" cy="50" r="4" fill="#18C8EC" opacity="0.7" />
        {/* Connection paths */}
        <path d="M60,65 C100,65 140,65 180,65" stroke="rgba(0,166,166,0.4)" strokeWidth="1" strokeDasharray="4 3" />
        {/* Toll point */}
        <rect x="125" y="55" width="3" height="20" fill="#00A6A6" opacity="0.6" rx="1" />
      </svg>
      <div className="absolute top-2 right-2 text-xs text-white/30 px-2 py-0.5 rounded-sm border border-white/10" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px' }}>
        Live Tracking
      </div>
    </div>

    {/* Fleet stats */}
    <div className="grid grid-cols-2 gap-3 mb-4">
      {[
        { label: 'Fleet Active', value: '—', color: '#00A6A6' },
        { label: 'Toll Points', value: '—', color: '#1765E0' },
      ].map((s) => (
        <div key={s.label} className="rounded-sm p-3 border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="text-lg font-bold mb-0.5" style={{ fontFamily: 'Manrope, sans-serif', color: s.color }}>
            {s.value}
          </div>
          <div className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
        </div>
      ))}
    </div>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-1.5">
      {['RFID', 'GNSS', 'NFC', 'ANPR', 'GPRS'].map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded-sm border text-xs"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            borderColor: 'rgba(0,166,166,0.3)',
            color: '#00A6A6',
            background: 'rgba(0,166,166,0.06)',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default function TranSmart() {
  const [activeTab, setActiveTab] = useState<PlatformKey>('banking');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const platform = tranSmartPlatforms[activeTab];

  return (
    <section
      id="products"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: '#082B4C' }}
      aria-labelledby="transmart-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 lg:mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-teal" />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase text-teal"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Products
            </span>
          </div>
          <h2
            id="transmart-heading"
            className="text-white mb-4"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
            }}
          >
            Introducing{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00A6A6, #18C8EC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              TranSmart
            </span>
          </h2>
          <p
            className="text-white/50"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.7 }}
          >
            A unified technology platform connecting banking, finance and mobility — designed for
            financial institutions, transit operators and smart city deployments.
          </p>
        </motion.div>

        {/* Tab selectors */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-0 mb-10 border border-white/10 rounded-sm overflow-hidden self-start inline-flex"
          role="tablist"
          aria-label="TranSmart platforms"
        >
          {(Object.keys(tranSmartPlatforms) as PlatformKey[]).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              aria-controls={`panel-${key}`}
              onClick={() => setActiveTab(key)}
              className={`relative px-6 py-3 text-sm font-semibold transition-all duration-250 ${
                activeTab === key
                  ? 'bg-teal text-white'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {tranSmartPlatforms[key].label}
            </button>
          ))}
        </motion.div>

        {/* Content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            id={`panel-${activeTab}`}
            role="tabpanel"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            {/* Left: Description & capabilities */}
            <div>
              <p
                className="text-white/80 mb-8 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.75 }}
              >
                {platform.description}
              </p>

              <div className="space-y-4">
                {platform.capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-teal" />
                    </div>
                    <div>
                      <div
                        className="font-semibold text-white mb-1 group-hover:text-teal transition-colors duration-200"
                        style={{ fontFamily: 'Manrope, sans-serif', fontSize: '15px' }}
                      >
                        {cap.title}
                      </div>
                      <div
                        className="text-white/45"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.6 }}
                      >
                        {cap.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech tags (mobility only) */}
              {platform.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="text-xs text-white/30 self-center mr-1" style={{ fontFamily: 'Inter, sans-serif' }}>Technologies:</span>
                  {platform.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-sm border"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        borderColor: 'rgba(0,166,166,0.4)',
                        color: '#00A6A6',
                        background: 'rgba(0,166,166,0.08)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:gap-3 transition-all duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Request platform demo
                  <ChevronRight size={15} />
                </a>
              </div>
            </div>

            {/* Right: UI visualization */}
            <div className="relative" style={{ minHeight: '380px' }}>
              <div
                className="absolute inset-0 rounded-sm overflow-hidden"
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 0 60px rgba(0,166,166,0.1)',
                }}
              >
                {activeTab === 'banking' ? <BankingUI /> : <MobilityUI />}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
