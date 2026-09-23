import CoachCard from '../../home/PopularCoaches/CoachCard';

function SimilarCoaches({ coaches }) {
  return (
    <section className="cd-similar">
      <h2 className="cd-similar-title">Vous pourriez egalement aimer</h2>
      <div className="cd-similar-grid">
        {coaches.map((coach) => (
          <CoachCard key={coach.id} coach={coach} />
        ))}
      </div>
    </section>
  );
}

export default SimilarCoaches;
