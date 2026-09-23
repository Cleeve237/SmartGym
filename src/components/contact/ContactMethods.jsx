import ContactMethodCard from './ContactMethodCard';

const methodsData = [
  {
    icon: 'bi-telephone',
    iconBg: 'var(--color-primary-lighter)',
    iconColor: 'var(--color-primary)',
    title: 'T\u00e9l\u00e9phone',
    description: 'Appelez-nous directement du lundi au samedi.',
    action: '+237 6XX XXX XXX',
    href: 'tel:+237600000000',
  },
  {
    icon: 'bi-envelope',
    iconBg: 'var(--color-info-light)',
    iconColor: 'var(--color-info)',
    title: 'Email',
    description: '\u00c9crivez-nous et nous vous r\u00e9pondrons sous 24h.',
    action: 'contact@smartgym.cm',
    href: 'mailto:contact@smartgym.cm',
  },
  {
    icon: 'bi-whatsapp',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    title: 'WhatsApp',
    description: 'Envoyez-nous un message rapide sur WhatsApp.',
    action: 'Envoyer un message',
    href: '#',
  },
  {
    icon: 'bi-geo-alt',
    iconBg: 'var(--color-accent-lighter)',
    iconColor: 'var(--color-accent)',
    title: 'Adresse',
    description: 'Rendez-vous &agrave; notre si&egrave;ge social &agrave; Yaound\u00e9.',
    action: 'Voir sur la carte',
    href: '#location',
  },
];

function ContactMethods() {
  return (
    <section className="ct-methods" aria-label="Moyens de contact">
      <div className="container">
        <div className="ct-section-header">
          <div className="ct-section-badge">
            <i className="bi bi-telephone-fill" />
            Contact
          </div>
          <h2 className="ct-section-title">
            Comment nous contacter
          </h2>
          <p className="ct-section-subtitle">
            Choisissez le moyen qui vous convient le mieux.
          </p>
        </div>

        <div className="row g-4">
          {methodsData.map((m) => (
            <div key={m.title} className="col-12 col-sm-6 col-lg-3">
              <ContactMethodCard method={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactMethods;
