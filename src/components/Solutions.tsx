import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { solutions } from '../data/socianteContent';

const solutionImages: Record<string, string> = {
  banking: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=75',
  payments: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=75',
  insurance: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=75',
  transit: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=75',
  'smart-city': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=75',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="solutions"
      ref={ref}
      className="bg-light py-24 lg:py-32"
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-teal" />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase text-teal"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Solutions
            </span>
          </div>
          <h2
            id="solutions-heading"
            className="font-manrope text-navy mb-5"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Technology built around the industries{' '}
            <span className="text-teal">that move the world.</span>
          </h2>
          <p
            className="text-navy/55"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.7 }}
          >
            From digital banking infrastructure to unified mobility platforms, Sociante
            delivers purpose-built technology for the sectors that power modern economies.
          </p>
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-sm cursor-pointer
                ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              `}
              style={{ minHeight: '340px' }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={solutionImages[solution.id]}
                  alt={`${solution.title} infrastructure`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Navy overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(8,43,76,0.95) 0%, rgba(8,43,76,0.7) 50%, rgba(8,43,76,0.4) 100%)',
                  }}
                />
                {/* Hover teal accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: `linear-gradient(90deg, ${solution.accent}, transparent)` }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-7" style={{ minHeight: '340px' }}>
                {/* Category tag */}
                <span
                  className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wider uppercase mb-3 self-start rounded-sm"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    background: `${solution.accent}25`,
                    color: solution.accent,
                    border: `1px solid ${solution.accent}40`,
                  }}
                >
                  {solution.category}
                </span>

                <h3
                  className="text-white font-bold mb-2 leading-tight"
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px' }}
                >
                  {solution.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {solution.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 group-hover:gap-3"
                  style={{ color: solution.accent, fontFamily: 'Inter, sans-serif' }}>
                  <span>Explore</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
