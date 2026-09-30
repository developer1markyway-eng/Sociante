import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitMerge, BarChart3, Shield, Headphones } from 'lucide-react';
import { valueProps } from '../data/socianteContent';

const iconMap: Record<string, React.ReactNode> = {
  GitMerge: <GitMerge size={22} strokeWidth={1.5} />,
  BarChart3: <BarChart3 size={22} strokeWidth={1.5} />,
  Shield: <Shield size={22} strokeWidth={1.5} />,
  Headphones: <Headphones size={22} strokeWidth={1.5} />,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function ValueProps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="value-props"
      ref={ref}
      className="bg-white border-b border-slate-100"
      aria-labelledby="value-props-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-teal" />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase text-teal"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Why Sociante
            </span>
          </div>
          <h2
            id="value-props-heading"
            className="font-manrope text-navy"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Built for enterprise.{' '}
            <span className="text-teal">Designed to connect.</span>
          </h2>
        </motion.div>

        {/* Value props grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0"
        >
          {valueProps.map((vp, i) => (
            <motion.div
              key={vp.id}
              variants={itemVariants}
              className={`relative group p-8 lg:p-10 
                ${i < valueProps.length - 1 ? 'border-b sm:border-b-0 border-slate-100' : ''}
                ${i % 2 === 0 && i < 2 ? 'sm:border-r border-slate-100' : ''}
                ${i < 2 ? 'sm:border-b lg:border-b-0' : ''}
                ${i < 3 ? 'lg:border-r border-slate-100' : ''}
              `}
            >
              {/* Teal top accent line on hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon */}
              <div className="flex items-center justify-center w-11 h-11 mb-6 rounded-sm border border-slate-100 text-teal group-hover:border-teal/30 group-hover:bg-teal/5 transition-all duration-300">
                {iconMap[vp.icon]}
              </div>

              <h3
                className="font-semibold text-navy mb-3 group-hover:text-teal transition-colors duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '17px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                {vp.title}
              </h3>
              <p
                className="text-navy/55 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
              >
                {vp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
