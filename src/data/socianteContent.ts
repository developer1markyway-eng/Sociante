// ============================================================
// SOCIANTE Content Data
// Source: sociante.com (factual content only)
// ============================================================

export const brand = {
  name: "SOCIANTE",
  tagline: "Connecting what matters.",
  subTagline: "Socializing Technology",
  description:
    "Technology platforms for banking, payments and mobility, built to connect systems, people and platforms into a more intelligent ecosystem.",
  email: "hello@sociante.com",
  phone: "+91 8237900663",
  address: "Pune, Maharashtra 411059, India",
  linkedin: "https://www.linkedin.com/company/sociante",
  website: "https://www.sociante.com",
};

export const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Company", href: "#company" },
  { label: "Resources", href: "#resources" },
];

export const valueProps = [
  {
    id: "integration",
    title: "Seamless Integration",
    description:
      "Connecting disparate systems into unified platforms that work together without friction.",
    icon: "GitMerge",
  },
  {
    id: "analytics",
    title: "Real-Time Analytics",
    description:
      "AI & ML powered dashboards delivering actionable business intelligence at the moment it matters.",
    icon: "BarChart3",
  },
  {
    id: "secure",
    title: "Secure & Scalable",
    description:
      "Enterprise-grade infrastructure built for the demands of banking, payments and mobility at scale.",
    icon: "Shield",
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Dedicated customer support teams ensuring your operations run without interruption.",
    icon: "Headphones",
  },
];

export const solutions = [
  {
    id: "banking",
    title: "Banking & Finance",
    description:
      "Digital banking platforms and payment infrastructure for financial institutions, from prepaid wallets to multi-system reconciliation.",
    category: "BFSI",
    accent: "#00A6A6",
    imageQuery: "modern banking digital infrastructure",
  },
  {
    id: "payments",
    title: "Payments",
    description:
      "End-to-end payment processing with issuing, acquiring, switching and dispute management capabilities.",
    category: "Payments",
    accent: "#1765E0",
    imageQuery: "payment technology infrastructure",
  },
  {
    id: "insurance",
    title: "Insurance",
    description:
      "Technology solutions enabling insurers to modernize operations, improve customer experience and manage risk.",
    category: "Insurance",
    accent: "#18C8EC",
    imageQuery: "insurance technology digital",
  },
  {
    id: "transit",
    title: "Transit & Mobility",
    description:
      "Unified mobility platforms integrating fleet management, toll collection, smart parking and mass transit fare solutions.",
    category: "Mobility",
    accent: "#00A6A6",
    imageQuery: "urban transit infrastructure highway",
  },
  {
    id: "smart-city",
    title: "Smart City",
    description:
      "Access management, parking solutions and integrated city infrastructure platforms for modern urban environments.",
    category: "Smart City",
    accent: "#1765E0",
    imageQuery: "smart city urban technology",
  },
];

export const tranSmartPlatforms = {
  banking: {
    id: "banking",
    label: "Digital Banking Platform",
    headline: "Transform your digital banking services",
    description:
      "TranSmart's Digital Banking Platform delivers the infrastructure financial institutions need to launch, scale and operate modern digital financial products. From prepaid wallets to corporate payments, every capability is designed for enterprise performance.",
    capabilities: [
      {
        title: "Prepaid Custom Wallet",
        description:
          "Branded, configurable prepaid wallet solutions for consumer and corporate use cases.",
      },
      {
        title: "Corporate Payments & Collection",
        description:
          "Enterprise-grade payment collection and disbursement infrastructure.",
      },
      {
        title: "Multi-System Reconciliation & Settlement",
        description:
          "Automated reconciliation across multiple payment channels and systems.",
      },
      {
        title: "Dispute & Chargeback Management",
        description:
          "Streamlined workflows for dispute resolution and chargeback handling.",
      },
      {
        title: "AI & ML Dashboard and Business Analytics",
        description:
          "Intelligent dashboards powered by AI and machine learning for operational insight.",
      },
    ],
    tags: [],
  },
  mobility: {
    id: "mobility",
    label: "Unified Mobility Platform",
    headline: "A full-stack platform for mobility and mass transit",
    description:
      "TranSmart is a full-stack Unified Mobility Platform offering a one-stop solution for the Mobility and Mass Transit sectors. It seamlessly integrates Banking, Financial Services and Payment solutions — creating a unique blend of mass transit and financial services tailored for customers.",
    capabilities: [
      {
        title: "Fleet Management",
        description:
          "Comprehensive fleet operations management for transit operators.",
      },
      {
        title: "Vehicle Tracking and Alerts",
        description:
          "Real-time vehicle tracking with intelligent alert systems.",
      },
      {
        title: "Electronic Toll Payments",
        description:
          "End-to-end electronic toll collection and revenue management.",
      },
      {
        title: "Smart Parking Payments",
        description:
          "ANPR and FASTag-based parking management with digital payment integration.",
      },
    ],
    tags: ["RFID", "GNSS", "NFC", "ANPR", "GPRS"],
  },
};

export const capabilities = [
  { id: "wallet", title: "Digital Wallet & POS", category: "Payments" },
  {
    id: "switching",
    title: "Issuing & Acquiring Switching",
    category: "Payments",
  },
  {
    id: "toll",
    title: "Electronic Toll Collection",
    category: "Mobility",
  },
  {
    id: "revenue",
    title: "Toll & Revenue Management",
    category: "Mobility",
  },
  {
    id: "reconciliation",
    title: "Multi-System Reconciliation",
    category: "Finance",
  },
  {
    id: "dispute",
    title: "Dispute & Chargeback Management",
    category: "Finance",
  },
  { id: "anpr", title: "ANPR & Image Review", category: "Technology" },
  { id: "parking", title: "Parking Management", category: "Smart City" },
  { id: "access", title: "Access Management", category: "Smart City" },
];

export const services = [
  {
    id: "management",
    title: "Management Consultancy",
    subtitle: "Maximize Business Growth through Technology",
    description:
      "Our expert business analysts partner with you to understand your goals and evolve your technology for optimal results. We help you create a strategic vision for your organization's future and identify tailored solutions to accelerate your success and drive sustainable growth.",
    cta: "Talk to our team",
  },
  {
    id: "process",
    title: "Business Process Consultancy",
    subtitle: "Harness the Power of Modern Technologies to Drive Business Growth",
    description:
      "We partner with you to leverage cutting-edge technology and optimize your business processes, enhancing operational efficiency and effectiveness. Together, we'll redesign workflows and implement innovative solutions tailored to your unique needs.",
    cta: "Talk to our team",
  },
];

export const whySociante = [
  {
    id: "business",
    title: "Business Expertise",
    description:
      "Deep domain knowledge across banking, finance, insurance, payments and mobility sectors.",
    icon: "Briefcase",
  },
  {
    id: "technology",
    title: "Technology Expertise",
    description:
      "Advanced technology services leveraging AI, ML, RFID, GNSS, NFC, ANPR and cloud infrastructure.",
    icon: "Cpu",
  },
  {
    id: "operations",
    title: "Operations Expertise",
    description:
      "Scalable, robust and secure platforms designed for mission-critical operations at enterprise scale.",
    icon: "Settings",
  },
  {
    id: "solutions",
    title: "Industry-Specific Solutions",
    description:
      "Purpose-built solutions for banking & finance, mass transit and mobility — not generic software adapted for the industry.",
    icon: "Target",
  },
  {
    id: "cloud",
    title: "Cloud-Based IT Services",
    description:
      "Modern cloud-based IT tools and services enabling organizations to scale efficiently and adapt rapidly.",
    icon: "Cloud",
  },
  {
    id: "integrated",
    title: "Integrated Platform Approach",
    description:
      "A forward-thinking approach that combines business acumen with cutting-edge technology to solve complex challenges.",
    icon: "GitMerge",
  },
];
