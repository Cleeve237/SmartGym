import Button from '../ui/Button';

function ProfileForm({ children, onSubmit, isSubmitting = false, onCancel }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="prf-form-card">
        {children}
        <div className="prf-form-actions">
          {onCancel && (
            <Button
              type="button"
              variant="outline-secondary"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
          )}
          <Button
            type="submit"
            variant="primary"
            icon="bi-check-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
