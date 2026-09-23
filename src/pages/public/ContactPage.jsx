import '../../components/contact/Contact.css';
import ContactHero from '../../components/contact/ContactHero';
import ContactMethods from '../../components/contact/ContactMethods';
import ContactForm from '../../components/contact/ContactForm';
import BusinessInquiryForm from '../../components/contact/BusinessInquiryForm';
import LocationSection from '../../components/contact/LocationSection';
import SupportHours from '../../components/contact/SupportHours';
import QuickFAQ from '../../components/contact/QuickFAQ';
import SocialLinks from '../../components/contact/SocialLinks';
import EmergencyContact from '../../components/contact/EmergencyContact';
import ContactCTA from '../../components/contact/ContactCTA';

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <section id="contact-form" className="ct-form-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-7">
              <ContactForm />
            </div>
            <div className="col-12 col-lg-5">
              <BusinessInquiryForm />
            </div>
          </div>
        </div>
      </section>
      <LocationSection />
      <SupportHours />
      <QuickFAQ />
      <SocialLinks />
      <EmergencyContact />
      <ContactCTA />
    </>
  );
}

export default ContactPage;
