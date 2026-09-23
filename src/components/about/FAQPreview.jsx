import { Link } from 'react-router-dom';

const faqData = [
  {
    id: 'ab-faq-1',
    question: 'Comment trouver un coach sur SmartGym\u00a0?',
    answer: 'Rendez-vous sur la page "Coachs", utilisez les filtres par ville, discipline ou disponibilit\u00e9, puis s\u00e9lectionnez le coach qui vous convient.',
  },
  {
    id: 'ab-faq-2',
    question: 'Les coachs sont-ils v\u00e9rifi\u00e9s\u00a0?',
    answer: 'Oui, chaque coach passe un processus de v\u00e9rification incluant la validation de ses certifications et de son exp\u00e9rience.',
  },
  {
    id: 'ab-faq-3',
    question: 'Comment se fait le paiement\u00a0?',
    answer: 'Nous acceptons Mobile Money (MTN MoMo, Orange Money) et les cartes bancaires. Tous les paiements sont s\u00e9curis\u00e9s et crypt\u00e9s.',
  },
  {
    id: 'ab-faq-4',
    question: 'Puis-je annuler une r\u00e9servation\u00a0?',
    answer: 'Oui, vous pouvez annuler jusqu&apos;&agrave; 24h avant la s\u00e9ance. Pass\u00e9 ce d\u00e9lai, un remboursement partiel peut s&apos;appliquer.',
  },
];

function FAQPreview() {
  return (
    <section className="ab-faq" aria-label="Questions fr\u00e9quentes">
      <div className="container">
        <div className="ab-section-header">
          <div className="ab-section-badge">
            <i className="bi bi-question-circle-fill" />
            FAQ
          </div>
          <h2 className="ab-section-title">
            Questions fr\u00e9quentes
          </h2>
          <p className="ab-section-subtitle">
            Les r\u00e9ponses aux questions les plus courantes.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="accordion" id="aboutFaqAccordion">
              {faqData.map((item, index) => (
                <div key={item.id} className="ab-faq-item">
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={item.id}
                    >
                      <span className="ab-faq-number">0{index + 1}</span>
                      <span className="flex-grow-1">{item.question}</span>
                      <span className="ab-faq-icon">
                        <i className="bi bi-chevron-down" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#aboutFaqAccordion"
                  >
                    <div className="ab-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Link
            to="/contact"
            className="btn btn-outline-primary"
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            Voir toute la FAQ
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQPreview;
