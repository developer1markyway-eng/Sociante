import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navItems } from '../data/socianteContent';

// Inline SVG logo component
const SocianteLogo = ({ className = '', light = false }: { className?: string; light?: boolean }) => (
  <svg
    viewBox="0 0 180 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="SOCIANTE"
  >
    {/* Two interlocking ribbon-like forms */}
    <g>
      {/* Left ribbon path */}
      <path
        d="M8 20 C8 12, 14 8, 20 10 C26 12, 28 18, 32 20 C28 22, 26 28, 20 30 C14 32, 8 28, 8 20Z"
        fill={light ? '#00A6A6' : '#00A6A6'}
        opacity="0.9"
      />
      {/* Right ribbon path */}
      <path
        d="M32 20 C36 14, 42 12, 46 16 C50 20, 48 24, 44 26 C40 28, 36 26, 32 20Z"
        fill={light ? '#18C8EC' : '#1765E0'}
        opacity="0.85"
      />
      {/* Connection node */}
      <circle cx="32" cy="20" r="2.5" fill={light ? '#ffffff' : '#18C8EC'} />
    </g>
    {/* SOCIANTE text */}
    <text
      x="58"
      y="26"
      fontFamily="Manrope, sans-serif"
      fontWeight="800"
      fontSize="18"
      fill={light ? '#ffffff' : '#082B4C'}
      letterSpacing="2"
    >
      SOCIANTE
    </text>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navClass = scrolled
    ? 'bg-white/98 backdrop-blur-sm shadow-sm shadow-navy/5'
    : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navClass}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center" aria-label="SOCIANTE Home">
              <SocianteLogo
                className="h-8 w-auto"
                light={!scrolled}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setActiveItem(item.label)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm group
                    ${scrolled
                      ? 'text-navy/70 hover:text-navy'
                      : 'text-white/80 hover:text-white'
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px transition-all duration-200 origin-left
                      ${activeItem === item.label ? 'scale-x-100' : 'scale-x-0'}
                      ${scrolled ? 'bg-teal' : 'bg-white/60'}`}
                  />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-sm transition-all duration-200
                  ${scrolled
                    ? 'bg-royal text-white hover:bg-royal-600 shadow-sm hover:shadow-royal/25 hover:shadow-lg'
                    : 'bg-white text-navy hover:bg-teal hover:text-white'
                  }`}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Request a Demo
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-sm transition-colors duration-200
                ${scrolled ? 'text-navy' : 'text-white'}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-navy flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <SocianteLogo className="h-8 w-auto" light />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 px-5 py-8 flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-white/10 text-white/90 hover:text-white font-medium text-lg transition-colors duration-200"
                >
                  {item.label}
                  <ChevronRight size={16} className="text-teal" />
                </motion.a>
              ))}
            </nav>

            <div className="px-5 pb-10">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-4 bg-royal text-white font-semibold rounded-sm text-sm tracking-wide hover:bg-royal-600 transition-colors duration-200"
              >
                Request a Demo
              </motion.a>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="absolute bottom-0 right-0 opacity-5 w-64 h-64" viewBox="0 0 200 200" fill="none">
                <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="150" cy="150" r="60" stroke="white" strokeWidth="0.5" fill="none" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
