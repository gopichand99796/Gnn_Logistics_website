import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import ScaleSection from '../sections/ScaleSection';
import StatisticsSection from '../sections/StatisticsSection';
import FleetSection from '../sections/FleetSection';
import LogisticsJourneySection from '../sections/LogisticsJourneySection';
import ServiceRegionsSection from '../sections/ServiceRegionsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ScaleSection />
      <StatisticsSection />
      <FleetSection />
      <LogisticsJourneySection />
      <ServiceRegionsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
