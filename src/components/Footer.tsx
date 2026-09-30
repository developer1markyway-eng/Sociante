import { brand } from '../data/socianteContent';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// Inline LinkedIn icon since lucide-react doesn't export it in this version
const LinkedInIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const SocianteLogoLight = () => (
  <svg
    viewBox="0 0 200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-auto"
    aria-label="SOCIANTE"
  >
    <g>
      <path
        d="M8 20 C8 12, 14 8, 20 10 C26 12, 28 18, 32 20 C28 22, 26 28, 20 30 C14 32, 8 28, 8 20Z"
        fill="#00A6A6"
        opacity="0.9"
      />
      <path
        d="M32 20 C36 14, 42 12, 46 16 C50 20, 48 24, 44 26 C40 28, 36 26, 32 20Z"
        fill="#18C8EC"
        opacity="0.85"
      />
      <circle cx="32" cy="20" r="2.5" fill="#ffffff" />
    </g>
    <text
      x="58"
      y="26"
      fontFamily="Manrope, sans-serif"
      fontWeight="800"
      fontSize="18"
      fill="#ffffff"
      letterSpacing="2"
    >
      SOCIANTE
    </text>
  </svg>
);

const footerLinks = {
  Solutions: [
    { label: 'Banking & Finance', href: '#solutions' },
    { label: 'Payments', href: '#solutions' },
    { label: 'Insurance', href: '#solutions' },
    { label: 'Transit & Mobility', href: '#solutions' },
    { label: 'Smart City', href: '#solutions' },
  ],
  Products: [
    { label: 'TranSmart', href: '#products' },
    { label: 'Digital Banking Platform', href: '#products' },
    { label: 'Unified Mobility Platform', href: '#products' },
  ],
  Services: [
    { label: 'Management Consultancy', href: '#services' },
    { label: 'Business Process Consultancy', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#company' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Careers', href: '#' },
    { label: 'Resources', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{ background: '#051e36' }}
      aria-label="Site footer"
    >
      {/* Top border accent */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00A6A6, #1765E0, transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <SocianteLogoLight />
            <p
              className="text-white/40 mt-5 mb-6 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', maxWidth: '280px' }}
            >
              {brand.tagline}
              <br />
              Technology platforms for banking, payments and mobility.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2.5 text-white/40 hover:text-teal transition-colors duration-200 group"
              >
                <Mail size={13} className="text-teal/60 group-hover:text-teal" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>{brand.email}</span>
              </a>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2.5 text-white/40 hover:text-teal transition-colors duration-200 group"
              >
                <Phone size={13} className="text-teal/60 group-hover:text-teal" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>{brand.phone}</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/40">
                <MapPin size={13} className="text-teal/60 flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', lineHeight: 1.5 }}>{brand.address}</span>
              </div>
            </div>

            {/* Social */}
            <a
              href={brand.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-white/40 hover:border-teal/40 hover:text-teal rounded-sm transition-all duration-200 text-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
              aria-label="Sociante on LinkedIn"
            >
              <LinkedInIcon size={13} />
              LinkedIn
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4
                className="text-white font-semibold mb-5 text-sm"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-white/80 transition-colors duration-200 text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {currentYear} Sociante Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
