import FaqItem from './FaqItem';

const faqGroups = [
  {
    id: 'fq-cat-general',
    title: 'G\u00e9n\u00e9ral',
    icon: 'bi-info-circle',
    questions: [
      { question: 'Qu&apos;est-ce que SmartGym ?', answer: 'SmartGym est une plateforme camerounaise qui connecte les athl\u00e8tes avec des coachs sportifs certifi\u00e9s. Vous pouvez rechercher un coach, r\u00e9server des s\u00e9ances, suivre des programmes et payer en toute s\u00e9curit\u00e9.' },
      { question: 'Comment fonctionne SmartGym ?', answer: 'Cr\u00e9ez un compte, recherchez un coach selon votre ville et vos objectifs, r\u00e9servez une s\u00e9ance, payez en ligne et commencez votre entra\u00eEnement. Tout se g\u00e8re depuis votre tableau de bord.' },
      { question: 'SmartGym est-il disponible dans toute ma ville ?', answer: 'SmartGym est actuellement disponible &agrave; Yaound\u00e9, Douala, Bamenda, Bafoussam et d&apos;autres villes du Cameroun. Nous \u00e9tendons r\u00e9guli\u00e8rement notre couverture.' },
      { question: 'L&apos;utilisation de SmartGym est-elle gratuite ?', answer: 'L&apos;inscription est gratuite. Les frais s&apos;appliquent uniquement lors de la r\u00e9servation d&apos;une s\u00e9ance ou d&apos;un programme. Vous ne payez que ce que vous consommez.' },
    ],
  },
  {
    id: 'fq-cat-compte',
    title: 'Compte utilisateur',
    icon: 'bi-person',
    questions: [
      { question: 'Comment cr\u00e9er un compte ?', answer: 'Cliquez sur "S&apos;inscrire" en haut de page, remplissez vos informations personnelles (nom, email, mot de passe) et validez votre email. Votre compte est actif en quelques secondes.' },
      { question: 'Comment modifier mon profil ?', answer: 'Connectez-vous &agrave; votre compte, acc\u00e9dez &agrave; "Mon profil" depuis le tableau de bord, puis modifiez vos informations et enregistrez vos changements.' },
      { question: 'Comment r\u00e9initialiser mon mot de passe ?', answer: 'Sur la page de connexion, cliquez sur "Mot de passe oubli\u00e9", saisissez votre email et suivez les instructions envoy\u00e9es dans votre bo\u00eete de r\u00e9ception.' },
    ],
  },
  {
    id: 'fq-cat-reservations',
    title: 'R\u00e9servations',
    icon: 'bi-calendar-check',
    questions: [
      { question: 'Comment r\u00e9server une s\u00e9ance ?', answer: 'Choisissez un coach, consultez ses disponibilit\u00e9s, s\u00e9lectionnez un cr\u00e9neau, validez votre r\u00e9servation et proc\u00e9dez au paiement. Vous recevrez une confirmation par email et SMS.' },
      { question: 'Puis-je annuler une r\u00e9servation ?', answer: 'Oui, vous pouvez annuler jusqu&apos;&agrave; 24 heures avant la s\u00e9ance depuis votre tableau de bord. Pass\u00e9 ce d\u00e9lai, un remboursement partiel peut s&apos;appliquer selon la politique du coach.' },
      { question: 'Comment reporter une s\u00e9ance ?', answer: 'Contactez votre coach directement via la messagerie SmartGym ou annulez la s\u00e9ance et r\u00e9servez un nouveau cr\u00e9neau qui vous convient mieux.' },
    ],
  },
  {
    id: 'fq-cat-paiements',
    title: 'Paiements',
    icon: 'bi-credit-card',
    questions: [
      { question: 'Quels moyens de paiement seront disponibles ?', answer: 'SmartGym acceptera Mobile Money (MTN MoMo, Orange Money), les cartes bancaires (Visa, Mastercard) et les virements bancaires. Les paiements sont 100% s\u00e9curis\u00e9s.' },
      { question: 'Mon paiement est-il s\u00e9curis\u00e9 ?', answer: 'Oui, tous les paiements sont chiffr\u00e9s et prot\u00e9g\u00e9s. Nous utilisons des protocoles de s\u00e9curit\u00e9 bancaire pour garantir la s\u00e9curit\u00e9 de vos transactions.' },
      { question: 'Puis-je obtenir un remboursement ?', answer: 'Oui, en cas d&apos;annulation dans les d\u00e9lais impartis ou de non-r\u00e9alisation de la s\u00e9ance par le coach, un remboursement complet ou partiel sera effectu\u00e9 sur votre moyen de paiement.' },
    ],
  },
  {
    id: 'fq-cat-coachs',
    title: 'Coachs',
    icon: 'bi-person-workspace',
    questions: [
      { question: 'Comment devenir coach sur SmartGym ?', answer: 'Cliquez sur "Devenir coach", remplissez le formulaire de candidature avec vos certifications et exp\u00e9riences. Notre \u00e9quipe examinera votre sous 48 heures.' },
      { question: 'Comment publier un programme ?', answer: 'Apr\u00e8s validation de votre profil, acc\u00e9dez &agrave; votre espace coach, cliquez sur "Cr\u00e9er un programme", d\u00e9finissez le contenu, le tarif et la visibilit\u00e9, puis publiez.' },
      { question: 'Comment modifier mon profil coach ?', answer: 'Connectez-vous &agrave; votre espace coach, allez dans "Param\u00e8tres du profil", modifiez vos informations, photo, biographie et tarifs, puis enregistrez.' },
    ],
  },
  {
    id: 'fq-cat-programmes',
    title: 'Programmes',
    icon: 'bi-list-check',
    questions: [
      { question: 'Comment choisir un programme ?', answer: 'Parcourez le catalogue de programmes, filtrez par cat\u00e9gorie, niveau et objectif. Lisez les descriptions et avis, puis r\u00e9servez celui qui correspond &agrave; vos besoins.' },
      { question: 'Puis-je suivre plusieurs programmes ?', answer: 'Oui, vous pouvez suivre plusieurs programmes simultan\u00e9ment, &agrave; condition que vos cr\u00e9neaux ne se chevauchent pas et que votre budget le permette.' },
    ],
  },
  {
    id: 'fq-cat-securite',
    title: 'S\u00e9curit\u00e9',
    icon: 'bi-shield-lock',
    questions: [
      { question: 'Mes donn\u00e9es sont-elles prot\u00e9g\u00e9es ?', answer: 'Oui, nous prenons la protection de vos donn\u00e9es tr\u00e8s au s\u00e9rieux. Toutes les donn\u00e9es sont chiffr\u00e9es et stock\u00e9es de mani\u00e8re s\u00e9curis\u00e9e, conform\u00e9ment aux r\u00e9glementations en vigueur.' },
      { question: 'Comment modifier mon mot de passe ?', answer: 'Allez dans "Param\u00e8tres" de votre compte, cliquez sur "Changer le mot de passe", saisissez votre mot de passe actuel puis le nouveau, et enregistrez.' },
      { question: 'Comment supprimer mon compte ?', answer: 'Contactez notre support via le formulaire de contact en demandant la suppression de votre compte. Nous traiterons votre demande sous 72 heures.' },
    ],
  },
  {
    id: 'fq-cat-support',
    title: 'Support',
    icon: 'bi-headset',
    questions: [
      { question: 'Comment contacter le support ?', answer: 'Vous pouvez nous contacter par t\u00e9l\u00e9phone, email, WhatsApp ou via le formulaire de contact disponible sur la page Contact. Notre \u00e9quipe est disponible du lundi au samedi.' },
      { question: 'Quel est le d\u00e9lai de r\u00e9ponse ?', answer: 'Notre \u00e9quipe s&apos;engage &agrave; r\u00e9pondre sous 24 heures pour les demandes g\u00e9n\u00e9rales et sous 2 heures pour les urgences via WhatsApp ou t\u00e9l\u00e9phone.' },
    ],
  },
];

function FaqAccordion() {
  return (
    <section className="fq-accordion-section" id="faq-questions" aria-label="Toutes les questions">
      <div className="container">
        <div className="fq-section-header">
          <div className="fq-section-badge">
            <i className="bi bi-chat-left-text-fill" />
            Questions
          </div>
          <h2 className="fq-section-title">
            Toutes les questions
          </h2>
          <p className="fq-section-subtitle">
            Parcourez nos r\u00e9ponses organis\u00e9es par cat\u00e9gorie.
          </p>
        </div>

        {faqGroups.map((group) => (
          <div key={group.id} className="fq-accordion-group" id={group.id}>
            <h3 className="fq-accordion-category-title">
              <i className={`bi ${group.icon}`} aria-hidden="true" />
              {group.title}
            </h3>
            <div className="accordion" id={`${group.id}-accordion`}>
              {group.questions.map((item, i) => (
                <FaqItem
                  key={i}
                  item={item}
                  index={i}
                  parent={group.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqAccordion;
