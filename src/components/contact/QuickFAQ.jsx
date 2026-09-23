const faqData = [
  {
    id: 'ct-faq-1',
    question: 'Comment r\u00e9server une s\u00e9ance ?',
    answer: 'Rendez-vous sur la page "Coachs", choisissez le coach qui vous convient, s\u00e9lectionnez un cr\u00e9neau et r\u00e9servez en quelques clics. Le paiement se fait directement en ligne.',
  },
  {
    id: 'ct-faq-2',
    question: 'Comment devenir coach ?',
    answer: 'Cliquez sur "Devenir coach" dans le menu, remplissez le formulaire de candidature avec vos certifications. Notre \u00e9quipe examinera votre dossier sous 48h.',
  },
  {
    id: 'ct-faq-3',
    question: 'Quels moyens de paiement sont accept\u00e9s ?',
    answer: 'Nous acceptons Mobile Money (MTN MoMo, Orange Money), les cartes bancaires (Visa, Mastercard) et les virements bancaires.',
  },
  {
    id: 'ct-faq-4',
    question: 'Comment annuler une r\u00e9servation ?',
    answer: 'Vous pouvez annuler une r\u00e9servation depuis votre tableau de bord jusqu&apos;&agrave; 24h avant la s\u00e9ance. Pass\u00e9 ce d\u00e9lai, un remboursement partiel peut s&apos;appliquer.',
  },
  {
    id: 'ct-faq-5',
    question: 'Comment contacter le support ?',
    answer: 'Vous pouvez nous contacter par t\u00e9l\u00e9phone, email, WhatsApp ou via le formulaire de contact. Notre \u00e9quipe est disponible du lundi au samedi.',
  },
];

function QuickFAQ() {
  return (
    <section className="ct-faq" aria-label="Questions fr\u00e9quentes">
      <div className="container">
        <div className="ct-section-header">
          <div className="ct-section-badge">
            <i className="bi bi-question-circle-fill" />
            FAQ
          </div>
          <h2 className="ct-section-title">
            Questions fr\u00e9quentes
          </h2>
          <p className="ct-section-subtitle">
            Les r\u00e9ponses aux questions les plus courantes.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="accordion" id="contactFaqAccordion">
              {faqData.map((item, index) => (
                <div key={item.id} className="ct-faq-item">
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={item.id}
                    >
                      <span className="ct-faq-number">0{index + 1}</span>
                      <span className="flex-grow-1">{item.question}</span>
                      <span className="ct-faq-icon">
                        <i className="bi bi-chevron-down" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#contactFaqAccordion"
                  >
                    <div className="ct-faq-body">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickFAQ;
