import '../../components/faq/Faq.css';
import FaqHero from '../../components/faq/FaqHero';
import FaqSearchBar from '../../components/faq/FaqSearchBar';
import FaqCategories from '../../components/faq/FaqCategories';
import FaqAccordion from '../../components/faq/FaqAccordion';
import PopularQuestions from '../../components/faq/PopularQuestions';
import NeedHelpSection from '../../components/faq/NeedHelpSection';
import FaqCTA from '../../components/faq/FaqCTA';

function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqSearchBar />
      <FaqCategories />
      <FaqAccordion />
      <PopularQuestions />
      <NeedHelpSection />
      <FaqCTA />
    </>
  );
}

export default FaqPage;
