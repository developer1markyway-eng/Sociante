import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/socianteContent';

const serviceImages: Record<string, string> = {
  management: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
  process: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 lg:py-32 bg-light"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-teal" />
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase text-teal"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Services
            </span>
          </div>
          <h2
            id="services-heading"
            className="text-navy"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Expert consulting for{' '}
            <span className="text-teal">technology-led growth.</span>
          </h2>
        </motion.div>

        {/* Services split cards */}
        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-sm
                ${i % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}
            >
              {/* Image side */}
              <div
                className={`relative overflow-hidden ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                style={{ minHeight: '340px' }}
              >
                <img
                  src={serviceImages[service.id]}
                  alt={`${service.title} - infrastructure and technology`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                {/* Navy overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(8,43,76,0.55) 0%, rgba(8,43,76,0.25) 100%)' }}
                />
                {/* Corner label */}
                <div className="absolute bottom-6 left-6">
                  <span
                    className="px-3 py-1.5 text-xs font-semibold text-white rounded-sm"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      background: 'rgba(0,166,166,0.3)',
                      border: '1px solid rgba(0,166,166,0.4)',
                    }}
                  >
                    Consulting Services
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div
                className={`flex flex-col justify-center p-10 lg:p-14 bg-white
                  ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-px bg-teal" />
                  <span
                    className="text-xs font-semibold tracking-widest uppercase text-teal"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className="text-navy mb-2"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-teal font-medium mb-5 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {service.subtitle}
                </p>
                <p
                  className="text-navy/55 mb-8 leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: 1.75 }}
                >
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-sm transition-all duration-200 hover:bg-teal self-start"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {service.cta}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
