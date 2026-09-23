import '../../components/about/About.css';
import AboutHero from '../../components/about/AboutHero';
import OurStorySection from '../../components/about/OurStorySection';
import ProblemSection from '../../components/about/ProblemSection';
import SolutionSection from '../../components/about/SolutionSection';
import MissionVisionSection from '../../components/about/MissionVisionSection';
import ValuesSection from '../../components/about/ValuesSection';
import ImpactNumbers from '../../components/about/ImpactNumbers';
import WhyChooseUs from '../../components/about/WhyChooseUs';
import TeamSection from '../../components/about/TeamSection';
import PartnersSection from '../../components/about/PartnersSection';
import TimelineSection from '../../components/about/TimelineSection';
import TestimonialsPreview from '../../components/about/TestimonialsPreview';
import FAQPreview from '../../components/about/FAQPreview';
import AboutCTA from '../../components/about/AboutCTA';

function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStorySection />
      <ProblemSection />
      <SolutionSection />
      <MissionVisionSection />
      <ValuesSection />
      <ImpactNumbers />
      <WhyChooseUs />
      <TeamSection />
      <PartnersSection />
      <TimelineSection />
      <TestimonialsPreview />
      <FAQPreview />
      <AboutCTA />
    </>
  );
}

export default AboutPage;
