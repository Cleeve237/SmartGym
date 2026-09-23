import { Link } from 'react-router-dom';

function AdminCategoriesPage() {
  return (
    <div className="container py-5">
      <h1>Categories</h1>
      <p className="text-muted">
        Gérez les catégories de programmes et d&apos;activités.
      </p>
      <Link to="/admin" className="btn btn-outline-primary btn-sm">
        <i className="bi bi-arrow-left me-1" />
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default AdminCategoriesPage;
