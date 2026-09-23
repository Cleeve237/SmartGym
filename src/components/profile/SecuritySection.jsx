import ProfileSection from './ProfileSection';
import PasswordChangeForm from './PasswordChangeForm';

function SecuritySection({ onPasswordChange, isChangingPassword = false }) {
  return (
    <ProfileSection title="Securite" icon="bi-shield-lock">
      <PasswordChangeForm
        onSubmit={onPasswordChange}
        isSubmitting={isChangingPassword}
      />
    </ProfileSection>
  );
}

export default SecuritySection;
