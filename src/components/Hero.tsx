import { useRef } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

// Connection network SVG overlay
const ConnectionNetwork = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 900"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pathGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00A6A6" stopOpacity="0" />
        <stop offset="50%" stopColor="#00A6A6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#18C8EC" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="pathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1765E0" stopOpacity="0" />
        <stop offset="50%" stopColor="#1765E0" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#18C8EC" stopOpacity="0.2" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Primary connection paths - derived from logo ribbon forms */}
    <path
      d="M -50 600 C 200 580, 400 400, 620 450 C 840 500, 900 380, 1100 320 C 1250 280, 1380 240, 1490 200"
      stroke="url(#pathGrad1)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="8 4"
      className="animate-[dash_20s_linear_infinite]"
      style={{ animation: 'none', opacity: 0.7 }}
    />
    <path
      d="M -50 700 C 150 680, 350 550, 580 520 C 780 495, 960 440, 1200 360 C 1330 320, 1420 280, 1490 260"
      stroke="url(#pathGrad2)"
      strokeWidth="1"
      fill="none"
      strokeDasharray="12 6"
      style={{ opacity: 0.4 }}
    />
    <path
      d="M 200 900 C 300 750, 500 600, 720 500 C 900 420, 1100 380, 1300 300"
      stroke="#00A6A6"
      strokeWidth="0.8"
      fill="none"
      style={{ opacity: 0.25 }}
    />

    {/* Node points */}
    <circle cx="620" cy="450" r="4" fill="#00A6A6" opacity="0.8" filter="url(#glow)" />
    <circle cx="620" cy="450" r="10" fill="none" stroke="#00A6A6" strokeWidth="0.8" opacity="0.4" />
    <circle cx="1100" cy="320" r="3" fill="#18C8EC" opacity="0.7" filter="url(#glow)" />
    <circle cx="1100" cy="320" r="8" fill="none" stroke="#18C8EC" strokeWidth="0.8" opacity="0.3" />
    <circle cx="720" cy="500" r="3" fill="#1765E0" opacity="0.6" filter="url(#glow)" />
    <circle cx="400" cy="420" r="2.5" fill="#00A6A6" opacity="0.5" />
    <circle cx="900" cy="390" r="2" fill="#18C8EC" opacity="0.5" />

    {/* Subtle grid lines */}
    <line x1="0" y1="0" x2="1440" y2="900" stroke="white" strokeWidth="0.15" opacity="0.08" />
    <line x1="1440" y1="0" x2="0" y2="900" stroke="white" strokeWidth="0.15" opacity="0.06" />

    {/* Corner accent */}
    <path
      d="M 0 0 L 120 0 L 0 120"
      fill="none"
      stroke="#00A6A6"
      strokeWidth="0.5"
      opacity="0.3"
    />
    <path
      d="M 1440 900 L 1320 900 L 1440 780"
      fill="none"
      stroke="#1765E0"
      strokeWidth="0.5"
      opacity="0.3"
    />
  </svg>
);

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }),
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const next = document.getElementById('value-props');
    next?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#082B4C' }}
      aria-label="Hero section"
    >
      {/* Background image with navy overlay */}
      <div className="absolute inset-0">
        {/* Infrastructure image from Unsplash - highway/bridge */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
          alt="Infrastructure - bridge and highway infrastructure representing connectivity"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Deep navy overlay - 85% opacity */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(8,43,76,0.92) 0%, rgba(8,43,76,0.88) 40%, rgba(8,43,76,0.82) 100%)'
          }}
        />
        {/* Bottom fade to ensure clean section transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(8,43,76,0.3))' }}
        />
      </div>

      {/* Connection network SVG */}
      <ConnectionNetwork />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl">
          {/* Section label */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2">
              <span className="block w-8 h-px bg-teal" />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-teal"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Sociante
              </span>
              <span className="block w-4 h-px bg-teal/50" />
              <span
                className="text-xs font-medium tracking-[0.15em] uppercase text-white/40"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Technology Platforms
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="font-manrope text-white mb-6"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
            }}
          >
            Connecting{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00A6A6, #18C8EC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              what matters.
            </span>
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.35}
            variants={fadeUp}
            className="text-white/65 mb-10 max-w-2xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(17px, 1.6vw, 20px)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            Technology platforms for banking, payments and mobility, built to connect
            systems, people and platforms into a more intelligent ecosystem.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-royal text-white font-semibold text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-royal-600 hover:shadow-xl hover:shadow-royal/30 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Request a Demo
              <ChevronRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-medium text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-white/8 hover:border-white/40 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore Our Platforms
              <ChevronRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 text-teal" />
            </a>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.65}
            variants={fadeUp}
            className="flex flex-wrap gap-2 mt-12"
          >
            {['Banking & Finance', 'Payments', 'Transit & Mobility', 'Smart City', 'Insurance'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/12 text-white/45 text-xs rounded-sm"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-200"
        aria-label="Scroll to next section"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
