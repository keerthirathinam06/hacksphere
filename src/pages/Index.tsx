import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import TopicSection from '@/components/TopicSection';
import ResourcesSection from '@/components/ResourcesSection';
import CoordinatorsSection from '@/components/CoordinatorsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <TopicSection />
      <ResourcesSection />
      <CoordinatorsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
