import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const placeholderCases = [
  {
    id: 'cs1',
    label: 'Case Study',
    industry: 'Banking & Finance',
    title: 'Digital Wallet Infrastructure Deployment',
    description: 'A case study demonstrating TranSmart\'s Digital Banking Platform capabilities across prepaid wallet and corporate payments infrastructure.',
    status: 'coming-soon',
    color: '#00A6A6',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=75',
  },
  {
    id: 'cs2',
    label: 'Case Study',
    industry: 'Transit & Mobility',
    title: 'Electronic Toll Collection Integration',
    description: 'Deploying TranSmart\'s Unified Mobility Platform to modernize toll collection and revenue management across a large highway corridor.',
    status: 'coming-soon',
    color: '#1765E0',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=75',
  },
  {
    id: 'cs3',
    label: 'Case Study',
    industry: 'Smart City',
    title: 'Smart Parking & Access Management',
    description: 'ANPR-based parking management and access control system implementation for modern urban infrastructure.',
    status: 'coming-soon',
    color: '#18C8EC',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=75',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="case-studies"
      ref={ref}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="cases-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="block w-6 h-px bg-teal" />
              <span
                className="text-xs font-semibold tracking-[0.15em] uppercase text-teal"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Case Studies
              </span>
            </div>
            <h2
              id="cases-heading"
              className="text-navy"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Real-world platforms.{' '}
              <span className="text-teal">Real impact.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-navy/40 text-sm max-w-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Detailed case studies coming soon. This section demonstrates the future design layout.
          </motion.p>
        </div>

        {/* Case study cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {placeholderCases.map((cs) => (
            <motion.div
              key={cs.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-sm border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/8 cursor-pointer"
            >
              {/* Image area */}
              <div className="relative overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(8,43,76,0.3), rgba(8,43,76,0.65))' }}
                />
                {/* Coming soon badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className="px-2.5 py-1 text-xs rounded-sm border border-white/20 text-white/70 bg-navy/60 backdrop-blur-sm"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Coming Soon
                  </span>
                </div>
                {/* Industry tag */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="px-2.5 py-1 text-xs font-semibold rounded-sm"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      background: `${cs.color}25`,
                      color: cs.color,
                      border: `1px solid ${cs.color}40`,
                    }}
                  >
                    {cs.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-navy font-bold mb-2 leading-snug group-hover:text-teal transition-colors duration-200"
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '17px' }}
                >
                  {cs.title}
                </h3>
                <p
                  className="text-navy/50 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {cs.description}
                </p>
                <div
                  className="flex items-center gap-2 text-sm font-medium text-teal opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-[-6px] group-hover:translate-x-0"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span>Read case study</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
