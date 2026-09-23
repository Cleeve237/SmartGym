import HeroSection from '../../components/home/HeroSection';
import StatsSection from '../../components/home/StatsSection';
import HowItWorksSection from '../../components/home/HowItWorksSection';
import CategoriesSection from '../../components/home/CategoriesSection';
import PopularCoachesSection from '../../components/home/PopularCoachesSection';
import BenefitsSection from '../../components/home/BenefitsSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import MobileAppSection from '../../components/home/MobileAppSection';
import CTASection from '../../components/home/CTASection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <CategoriesSection />
      <PopularCoachesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <MobileAppSection />
      <CTASection />
    </>
  );
}

export default HomePage;
