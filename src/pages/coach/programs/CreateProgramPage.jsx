import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../components/coach/programs/ProgramsManagement.css';
import ProgramForm from '../../../components/coach/programs/ProgramForm';
import PublishProgramCard from '../../../components/coach/programs/PublishProgramCard';

function CreateProgramPage() {
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([]);

  const handleImageAdd = () => {
    setImages((prev) => [...prev, { name: `Image ${prev.length + 1}`, url: null }]);
  };

  const handleImageRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="cd-programs-header">
        <div className="cd-programs-header-left">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: 'var(--font-size-sm)' }}>
              <li className="breadcrumb-item"><Link to="/coach/programs">Mes Programmes</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Nouveau Programme</li>
            </ol>
          </nav>
          <h1>Nouveau Programme</h1>
          <p>Remplissez les informations ci-dessous pour creer votre programme.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.25rem', alignItems: 'start' }}>
        <form onSubmit={handleSubmit}>
          <ProgramForm
            images={images}
            onImageAdd={handleImageAdd}
            onImageRemove={handleImageRemove}
            visible={visible}
            onVisibleToggle={setVisible}
          />
          <div className="cd-pgm-form-actions">
            <Link to="/coach/programs" className="btn btn-outline-secondary">
              Annuler
            </Link>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-lg me-2" />
              Creer le programme
            </button>
          </div>
        </form>

        <div className="cd-pgm-detail-sidebar">
          <PublishProgramCard visible={visible} onToggle={setVisible} />
        </div>
      </div>
    </div>
  );
}

export default CreateProgramPage;
