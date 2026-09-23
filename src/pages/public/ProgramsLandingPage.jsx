import '../../components/programs/landing/ProgramsLanding.css';
import ProgramsHero from '../../components/programs/landing/ProgramsHero';
import ProgramsBenefits from '../../components/programs/landing/ProgramsBenefits';
import ProgramCategories from '../../components/programs/landing/ProgramCategories';
import PopularPrograms from '../../components/programs/landing/PopularPrograms';
import HowItWorks from '../../components/programs/landing/HowItWorks';
import SuccessStories from '../../components/programs/landing/SuccessStories';
import TestimonialsSection from '../../components/programs/landing/TestimonialsSection';
import PricingPreview from '../../components/programs/landing/PricingPreview';
import FAQSection from '../../components/programs/landing/FAQSection';
import ProgramsNewsletter from '../../components/programs/landing/ProgramsNewsletter';
import ProgramsCTA from '../../components/programs/landing/ProgramsCTA';

function ProgramsLandingPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsBenefits />
      <ProgramCategories />
      <PopularPrograms />
      <HowItWorks />
      <SuccessStories />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection />
      <ProgramsNewsletter />
      <ProgramsCTA />
    </>
  );
}

export default ProgramsLandingPage;
