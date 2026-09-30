import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';
import { brand } from '../data/socianteContent';

// Connection lines SVG for CTA section
const CTAConnectionLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 500"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ctaGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#00A6A6" stopOpacity="0" />
        <stop offset="40%" stopColor="#00A6A6" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#18C8EC" stopOpacity="0.15" />
      </linearGradient>
      <linearGradient id="ctaGrad2" x1="100%" y1="50%" x2="0%" y2="50%">
        <stop offset="0%" stopColor="#1765E0" stopOpacity="0" />
        <stop offset="40%" stopColor="#1765E0" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#00A6A6" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Two paths converging to center — logo concept */}
    <path
      d="M -50 100 C 200 120, 400 200, 680 250 C 760 265, 800 260, 840 250"
      stroke="url(#ctaGrad1)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M 1490 100 C 1240 120, 1040 200, 760 250 C 680 265, 640 260, 600 250"
      stroke="url(#ctaGrad2)"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Connection node at center */}
    <circle cx="720" cy="250" r="4" fill="#00A6A6" opacity="0.7" />
    <circle cx="720" cy="250" r="12" fill="none" stroke="#00A6A6" strokeWidth="0.8" opacity="0.3" />
    <circle cx="720" cy="250" r="22" fill="none" stroke="#00A6A6" strokeWidth="0.4" opacity="0.15" />

    {/* Secondary paths */}
    <path
      d="M -50 380 C 150 360, 350 320, 580 280 C 660 265, 700 260, 720 250"
      stroke="#1765E0"
      strokeWidth="0.8"
      fill="none"
      opacity="0.2"
    />
    <path
      d="M 1490 380 C 1290 360, 1090 320, 860 280 C 780 265, 740 260, 720 250"
      stroke="#1765E0"
      strokeWidth="0.8"
      fill="none"
      opacity="0.2"
    />

    {/* Corner marks */}
    <path d="M 0 0 L 80 0 L 0 80" stroke="#00A6A6" strokeWidth="0.8" fill="none" opacity="0.25" />
    <path d="M 1440 500 L 1360 500 L 1440 420" stroke="#1765E0" strokeWidth="0.8" fill="none" opacity="0.25" />
  </svg>
);

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-28 lg:py-40"
      style={{ background: 'linear-gradient(135deg, #082B4C 0%, #0a3560 60%, #082B4C 100%)' }}
      aria-labelledby="cta-heading"
    >
      <CTAConnectionLines />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="flex-1 max-w-20 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,166,166,0.5))' }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-teal"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Get in touch
            </span>
            <div className="flex-1 max-w-20 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,166,166,0.5), transparent)' }} />
          </div>

          <h2
            id="cta-heading"
            className="text-white mx-auto mb-6"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '700px',
            }}
          >
            Let's{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00A6A6, #18C8EC)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              connect.
            </span>
          </h2>

          <p
            className="text-white/55 mx-auto mb-12"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(16px, 1.5vw, 18px)',
              lineHeight: 1.75,
              maxWidth: '540px',
            }}
          >
            Ready to explore how TranSmart can connect your systems, people and platforms?
            Request a personalised demo and speak with our team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-semibold text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal/25 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Request a Demo
              <ChevronRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wide rounded-sm transition-all duration-200 hover:bg-white/8 hover:border-white/35 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <Mail size={15} />
              {brand.email}
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/8">
            <div className="text-center">
              <div className="text-xs text-white/30 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Location</div>
              <div className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>{brand.address}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-xs text-white/30 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Phone</div>
              <div className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>{brand.phone}</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-xs text-white/30 mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Email</div>
              <a href={`mailto:${brand.email}`} className="text-sm text-white/60 hover:text-teal transition-colors duration-200" style={{ fontFamily: 'Inter, sans-serif' }}>
                {brand.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
