import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import InterfaceShowcase from './components/sections/InterfaceShowcase';
import ProactiveLayer from './components/sections/ProactiveLayer';
import ComparisonGrid from './components/sections/ComparisonGrid';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <InterfaceShowcase />
        <ProactiveLayer />
        <ComparisonGrid />
      </main>
      <Footer />
    </div>
  );
}
