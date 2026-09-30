import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Cpu, Settings, Target, Cloud, GitMerge } from 'lucide-react';
import { whySociante } from '../data/socianteContent';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={20} strokeWidth={1.5} />,
  Cpu: <Cpu size={20} strokeWidth={1.5} />,
  Settings: <Settings size={20} strokeWidth={1.5} />,
  Target: <Target size={20} strokeWidth={1.5} />,
  Cloud: <Cloud size={20} strokeWidth={1.5} />,
  GitMerge: <GitMerge size={20} strokeWidth={1.5} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export default function WhySociante() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="company"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: '#F8FAFC' }}
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
              id="why-heading"
              className="text-navy"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              A forward-thinking technology company backed by{' '}
              <span className="text-teal">industry expertise.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p
              className="text-navy/55 leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: 1.75 }}
            >
              Sociante combines business acumen with cutting-edge technology to solve complex
              challenges and accelerate growth through integrated technological offerings.
              From large enterprises to retail clients, Sociante is committed to empowering growth
              and enhancing digital capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Banking & Finance', 'Mass Transit', 'Mobility', 'Smart City', 'Insurance'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-sm border border-navy/12 text-navy/50"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whySociante.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group p-7 bg-white rounded-sm border border-slate-100 hover:border-teal/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 mb-5 rounded-sm border border-slate-100 text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all duration-300">
                {iconMap[item.icon]}
              </div>

              <h3
                className="text-navy font-bold mb-3"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '17px', lineHeight: 1.3 }}
              >
                {item.title}
              </h3>
              <p
                className="text-navy/50 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.7 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
