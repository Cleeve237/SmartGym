import { Link } from 'react-router-dom';
import Button from '../ui/Button';

function ProfileActions({ editPath, secondaryActions = [] }) {
  return (
    <div className="d-flex align-items-center gap-2 flex-wrap">
      {editPath && (
        <Link to={editPath}>
          <Button variant="primary" icon="bi-pencil">
            Modifier le profil
          </Button>
        </Link>
      )}
      {secondaryActions.map((action) => (
        <Link key={action.path} to={action.path}>
          <Button variant={action.variant || 'outline-secondary'} icon={action.icon}>
            {action.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default ProfileActions;
