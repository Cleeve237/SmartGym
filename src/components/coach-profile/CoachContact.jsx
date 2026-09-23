import CoachContactItem from './CoachContactItem';

export default function CoachContact({ coach }) {
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-telephone-fill" />
        <h2>Contact</h2>
      </div>
      <CoachContactItem icon="telephone-fill" label="Téléphone" value={coach.phone} />
      <CoachContactItem icon="envelope-fill" label="Email" value={coach.email} />
    </div>
  );
}
