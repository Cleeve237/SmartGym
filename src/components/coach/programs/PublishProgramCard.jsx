import ProgramVisibilitySwitch from './ProgramVisibilitySwitch';

function PublishProgramCard({ visible, onToggle }) {
  return (
    <div className="cd-pgm-publish">
      <div className="cd-pgm-publish-title">
        <i className="bi bi-globe" />
        Publication
      </div>
      <ProgramVisibilitySwitch
        visible={visible}
        onToggle={onToggle}
        label={visible ? 'Programme visible' : 'Programme prive'}
      />
      <p className="cd-pgm-form-hint" style={{ marginTop: '0.5rem' }}>
        {visible
          ? 'Votre programme est visible dans le catalogue public.'
          : 'Activez cette option pour publier votre programme.'}
      </p>
    </div>
  );
}

export default PublishProgramCard;
