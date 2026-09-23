import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../../../components/coach/programs/ProgramsManagement.css';
import ProgramsToolbar from '../../../components/coach/programs/ProgramsToolbar';
import ProgramTable from '../../../components/coach/programs/ProgramTable';
import ProgramGrid from '../../../components/coach/programs/ProgramGrid';
import EmptyPrograms from '../../../components/coach/programs/EmptyPrograms';
import DeleteProgramModal from '../../../components/coach/programs/DeleteProgramModal';
import DuplicateProgramModal from '../../../components/coach/programs/DuplicateProgramModal';

const MOCK_PROGRAMS = [
  { id: '1', title: 'Musculation Fondamentale', category: 'Musculation', price: 35000, weeks: 8, sessionsPerWeek: 3, status: 'active', bookings: 42, rating: 4.8, createdAt: '15 Jan 2026', description: 'Programme complet pour developing la force et la masse musculaire.' },
  { id: '2', title: 'Cardio Intensif & HIIT', category: 'Cardio', price: 28000, weeks: 6, sessionsPerWeek: 4, status: 'active', bookings: 35, rating: 4.6, createdAt: '02 Fev 2026', description: 'Programme haute intensite pour bruler les graisses.' },
  { id: '3', title: 'Yoga & Bien-etre', category: 'Yoga', price: 40000, weeks: 10, sessionsPerWeek: 3, status: 'active', bookings: 58, rating: 4.9, createdAt: '10 Dec 2025', description: 'Programme holistique combinant yoga et meditation.' },
  { id: '4', title: 'Boxe & Self-Defense', category: 'Boxe', price: 30000, weeks: 8, sessionsPerWeek: 3, status: 'draft', bookings: 0, rating: 0, createdAt: '20 Mar 2026', description: 'Apprenez les bases de la boxe et la self-defense.' },
  { id: '5', title: 'CrossFit Performance', category: 'CrossFit', price: 55000, weeks: 12, sessionsPerWeek: 5, status: 'inactive', bookings: 18, rating: 4.7, createdAt: '05 Nov 2025', description: 'Programme d\'entrainement fonctionnel avance.' },
  { id: '6', title: 'Danse & Cardio', category: 'Danse', price: 22000, weeks: 6, sessionsPerWeek: 3, status: 'active', bookings: 29, rating: 4.7, createdAt: '18 Avr 2026', description: 'Programme de danse fitness pour bruler des calories.' },
];

function CoachProgramsPage() {
  const [viewMode, setViewMode] = useState('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [programs, setPrograms] = useState(MOCK_PROGRAMS);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [duplicateTarget, setDuplicateTarget] = useState(null);

  const filtered = useMemo(() => {
    let result = [...programs];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }
    return result;
  }, [programs, searchQuery, categoryFilter]);

  const handleDelete = () => {
    if (deleteTarget) {
      setPrograms((prev) => prev.filter((p) => p.id !== deleteTarget.id));
      setDeleteTarget(null);
    }
  };

  const handleDuplicate = () => {
    if (duplicateTarget) {
      const copy = {
        ...duplicateTarget,
        id: `${Date.now()}`,
        title: `${duplicateTarget.title} (copie)`,
        status: 'draft',
        bookings: 0,
        rating: 0,
        createdAt: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
      };
      setPrograms((prev) => [copy, ...prev]);
      setDuplicateTarget(null);
    }
  };

  const handleTogglePublish = (program, publish) => {
    setPrograms((prev) =>
      prev.map((p) => p.id === program.id ? { ...p, status: publish ? 'active' : 'inactive' } : p)
    );
  };

  const hasFilter = !!(searchQuery || categoryFilter);

  return (
    <div>
      <div className="cd-programs-header">
        <div className="cd-programs-header-left">
          <h1>Mes Programmes</h1>
          <p>Gerez vos offres et publiez de nouveaux programmes.</p>
        </div>
        <Link to="/coach/programs/create" className="btn btn-primary">
          <i className="bi bi-plus-lg me-2" />
          Nouveau Programme
        </Link>
      </div>

      <ProgramsToolbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      {filtered.length > 0 ? (
        viewMode === 'table' ? (
          <ProgramTable
            programs={filtered}
            onDelete={setDeleteTarget}
            onDuplicate={setDuplicateTarget}
            onTogglePublish={handleTogglePublish}
          />
        ) : (
          <ProgramGrid
            programs={filtered}
            onDelete={setDeleteTarget}
            onDuplicate={setDuplicateTarget}
            onTogglePublish={handleTogglePublish}
          />
        )
      ) : (
        <EmptyPrograms hasFilter={hasFilter} />
      )}

      <DeleteProgramModal
        show={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        programTitle={deleteTarget?.title}
      />

      <DuplicateProgramModal
        show={!!duplicateTarget}
        onClose={() => setDuplicateTarget(null)}
        onConfirm={handleDuplicate}
        programTitle={duplicateTarget?.title}
      />
    </div>
  );
}

export default CoachProgramsPage;
