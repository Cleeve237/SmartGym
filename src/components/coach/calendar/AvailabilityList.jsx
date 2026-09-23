import AvailabilityCard from './AvailabilityCard';

function AvailabilityList({ availabilities, onDelete }) {
  if (!availabilities?.length) {
    return (
      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-500)', textAlign: 'center', padding: '2rem 0' }}>
        Aucun creneau configure.
      </p>
    );
  }

  return (
    <div>
      {availabilities.map((a) => (
        <AvailabilityCard key={a.id} availability={a} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default AvailabilityList;
