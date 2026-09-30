import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { capabilities } from '../data/socianteContent';

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  Payments: { text: '#00A6A6', bg: 'rgba(0,166,166,0.06)', border: 'rgba(0,166,166,0.2)' },
  Mobility: { text: '#1765E0', bg: 'rgba(23,101,224,0.06)', border: 'rgba(23,101,224,0.2)' },
  Finance: { text: '#18C8EC', bg: 'rgba(24,200,236,0.06)', border: 'rgba(24,200,236,0.2)' },
  Technology: { text: '#00A6A6', bg: 'rgba(0,166,166,0.06)', border: 'rgba(0,166,166,0.2)' },
  'Smart City': { text: '#1765E0', bg: 'rgba(23,101,224,0.06)', border: 'rgba(23,101,224,0.2)' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export default function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="capabilities"
      ref={ref}
      className="bg-white py-24 lg:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-teal" />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase text-teal"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Capabilities
            </span>
          </div>
          <h2
            id="capabilities-heading"
            className="text-navy mb-4"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Platform capabilities{' '}
            <span className="text-teal">at a glance.</span>
          </h2>
          <p
            className="text-navy/55"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.7 }}
          >
            A comprehensive suite of integrated capabilities spanning digital payments,
            toll infrastructure, fleet operations and smart city management.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
          style={{ border: '1px solid #E8EFF8', borderRadius: '2px' }}
        >
          {capabilities.map((cap, i) => {
            const colorStyle = categoryColors[cap.category] || categoryColors.Payments;
            const isRightEdge = (i + 1) % 3 === 0;

            return (
              <motion.div
                key={cap.id}
                variants={itemVariants}
                className="group relative p-7 lg:p-8 cursor-default transition-all duration-300 hover:z-10"
                style={{
                  borderRight: isRightEdge ? 'none' : '1px solid #E8EFF8',
                  borderBottom: '1px solid #E8EFF8',
                }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: colorStyle.bg }} />

                {/* Left border accent on hover */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-0.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  style={{ background: colorStyle.text }}
                />

                <div className="relative">
                  {/* Category */}
                  <span
                    className="inline-block px-2 py-0.5 rounded-sm text-xs mb-4"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      ...colorStyle,
                      color: colorStyle.text,
                    }}
                  >
                    {cap.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-navy font-semibold leading-snug group-hover:text-navy transition-colors duration-200"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                    }}
                  >
                    {cap.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
