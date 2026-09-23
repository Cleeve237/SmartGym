const faqData = [
  {
    id: 'faq-1',
    question: 'Comment r\u00e9server un programme ?',
    answer: 'Choisissez simplement le programme qui vous convient, cliquez sur "R\u00e9server" et suivez les \u00e9tapes. Le paiement se fait directement en ligne via Mobile Money ou carte bancaire. Vous recevrez une confirmation par SMS et email.',
  },
  {
    id: 'faq-2',
    question: 'Puis-je changer de coach en cours de programme ?',
    answer: 'Oui, vous pouvez demander un changement de coach depuis votre espace personnel. Nous nous assurons que le nouveau coach est disponible et compatible avec votre programme en cours.',
  },
  {
    id: 'faq-3',
    question: 'Comment effectuer le paiement ?',
    answer: 'Nous acceptons Mobile Money (MTN MoMo, Orange Money) ainsi que les cartes bancaires (Visa, Mastercard). Tous les paiements sont s\u00e9curis\u00e9s et crypt\u00e9s.',
  },
  {
    id: 'faq-4',
    question: 'Les coachs sont-ils certifi\u00e9s ?',
    answer: 'Tous nos coachs sont rigoureusement s\u00e9lectionn\u00e9s. Ils poss\u00e8dent au minimum une certification en coaching sportif et ont plusieurs ann\u00e9es d\'exp\u00e9rience.',
  },
  {
    id: 'faq-5',
    question: 'Puis-je annuler un programme ?',
    answer: 'Vous pouvez annuler et obtenir un remboursement complet dans les 7 premiers jours suivant la souscription. Pass\u00e9 d\u00e9lai, le remboursement est partiel selon la dur\u00e9e \u00e9coul\u00e9e.',
  },
  {
    id: 'faq-6',
    question: 'Les programmes sont-ils adapt\u00e9s &agrave; tous les niveaux ?',
    answer: 'Oui, chaque programme est class\u00e9 par niveau (d\u00e9butant, interm\u00e9diaire, avanc\u00e9). Votre coach adaptera les exercices selon votre condition physique.',
  },
  {
    id: 'faq-7',
    question: 'Comment suivre mes progr\u00e8s ?',
    answer: 'Votre tableau de bord personnel affiche vos statistiques, votre historique de s\u00e9ances et vos \u00e9volutions. Vous pouvez \u00e9galement \u00e9changer directement avec votre coach.',
  },
  {
    id: 'faq-8',
    question: 'Les s\u00e9ances sont-elles en ligne ou en presentiel ?',
    answer: 'La plupart de nos programmes se d\u00e9roulent en pr\u00e9sentiel avec votre coach. Certains coachs proposent \u00e9galement des suivis &agrave; distance pour les programmes de nutrition et de bien-\u00eatre.',
  },
  {
    id: 'faq-9',
    question: 'Puis-je acc\u00e9der au programme sur mobile ?',
    answer: 'Absolument ! Tous nos programmes sont accessibles depuis votre smartphone, tablette ou ordinateur. Vous pouvez suivre vos s\u00e9ances o&ugrave; que vous soyez.',
  },
  {
    id: 'faq-10',
    question: 'Que se passe-t-il si je rate une s\u00e9ance ?',
    answer: 'Pas de panique ! Votre coach s\'adaptera &agrave; votre emploi du temps. Vous pouvez reprogrammer les s\u00e9ances manqu\u00e9es selon les disponibilit\u00e9s du coach.',
  },
];

function FAQSection() {
  return (
    <section className="pl-faq" aria-label="Questions fr\u00e9quentes">
      <div className="container">
        <div className="pl-section-header">
          <div className="pl-section-badge">
            <i className="bi bi-question-circle-fill" />
            FAQ
          </div>
          <h2 className="pl-section-title">
            Questions fr\u00e9quentes
          </h2>
          <p className="pl-section-subtitle">
            Tout ce que vous devez savoir avant de commencer votre programme.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="accordion" id="programsFaqAccordion">
              {faqData.map((item, index) => (
                <div key={item.id} className="pl-faq-item">
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={item.id}
                    >
                      <span className="pl-faq-number">0{index + 1}</span>
                      <span className="flex-grow-1">{item.question}</span>
                      <span className="pl-faq-icon">
                        <i className="bi bi-chevron-down" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#programsFaqAccordion"
                  >
                    <div className="pl-faq-body">
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

export default FAQSection;
