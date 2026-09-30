import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Solutions from './components/Solutions';
import TranSmart from './components/TranSmart';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import WhySociante from './components/WhySociante';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Solutions />
        <TranSmart />
        <Capabilities />
        <Services />
        <WhySociante />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
