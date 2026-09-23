import { Link } from 'react-router-dom';
import ProgramStatusBadge from './ProgramStatusBadge';
import ProgramActionsDropdown from './ProgramActionsDropdown';

function ProgramTable({ programs, onDelete, onDuplicate, onTogglePublish }) {
  if (!programs?.length) return null;

  return (
    <div className="cd-programs-table-wrap">
      <table className="cd-programs-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Categorie</th>
            <th>Prix</th>
            <th>Duree</th>
            <th>Reservations</th>
            <th>Statut</th>
            <th>Creation</th>
            <th style={{ width: 50 }} />
          </tr>
        </thead>
        <tbody>
          {programs.map((p) => (
            <tr key={p.id}>
              <td>
                <div className="cd-programs-table-name">
                  <div className="cd-programs-table-thumb">
                    {p.image ? <img src={p.image} alt="" /> : <i className="bi bi-trophy" />}
                  </div>
                  <div className="cd-programs-table-info">
                    <Link
                      to={`/coach/programs/${p.id}`}
                      className="cd-programs-table-title text-decoration-none"
                      style={{ color: 'inherit' }}
                    >
                      {p.title}
                    </Link>
                  </div>
                </div>
              </td>
              <td>{p.category}</td>
              <td className="cd-programs-table-price">{p.price?.toLocaleString()} FCFA</td>
              <td>{p.weeks} sem.</td>
              <td>{p.bookings || 0}</td>
              <td><ProgramStatusBadge status={p.status} /></td>
              <td className="cd-programs-table-date">{p.createdAt}</td>
              <td>
                <ProgramActionsDropdown
                  onView={() => {}}
                  onEdit={() => {}}
                  onDuplicate={() => onDuplicate?.(p)}
                  onPublish={() => onTogglePublish?.(p, true)}
                  onUnpublish={() => onTogglePublish?.(p, false)}
                  onDelete={() => onDelete?.(p)}
                  isPublished={p.status === 'active'}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramTable;
