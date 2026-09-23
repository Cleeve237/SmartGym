import ProgramBasicInformation from './ProgramBasicInformation';
import ProgramPricingForm from './ProgramPricingForm';
import ProgramScheduleForm from './ProgramScheduleForm';
import ProgramObjectivesForm from './ProgramObjectivesForm';
import ProgramExerciseList from './ProgramExerciseList';
import ProgramGallery from './ProgramGallery';
import ProgramFAQ from './ProgramFAQ';
import ProgramVisibilitySwitch from './ProgramVisibilitySwitch';

function ProgramForm({ errors, images, onImageAdd, onImageRemove, visible, onVisibleToggle }) {
  return (
    <div className="cd-pgm-form">
      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">1</span>
            Informations generales
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramBasicInformation errors={errors} />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">2</span>
            Tarification
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramPricingForm errors={errors} />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">3</span>
            Planning
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramScheduleForm />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">4</span>
            Objectifs
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramObjectivesForm />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">5</span>
            Exercices
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramExerciseList />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">6</span>
            Galerie
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramGallery images={images} onRemove={onImageRemove} onAdd={onImageAdd} />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">7</span>
            Questions frequentes
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramFAQ />
        </div>
      </div>

      <div className="cd-pgm-form-section">
        <div className="cd-pgm-form-section-header">
          <div className="cd-pgm-form-section-title">
            <span className="cd-pgm-form-section-number">8</span>
            Publication
          </div>
        </div>
        <div className="cd-pgm-form-section-body">
          <ProgramVisibilitySwitch
            visible={visible}
            onToggle={onVisibleToggle}
            label={visible ? 'Programme visible' : 'Programme prive'}
          />
          <p className="cd-pgm-form-hint" style={{ marginTop: '0.5rem' }}>
            {visible
              ? 'Votre programme est visible par tous les visiteurs.'
              : 'Votre programme est prive et uniquement accessible via un lien direct.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramForm;
